import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { SharedService } from '../../services/shared-service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class MarketsWeServeService {

  collection: string = "categories";

  constructor(
    private firestore: AngularFirestore,
    private localSt: LocalStorageService,
    private router: Router,
    public sharedSrv: SharedService
  ) { }

  getCategories() {
    return this.firestore.collection(this.collection).valueChanges();
  }

  getCategoriesFromSession() {
    return this.localSt.observe(this.collection);
  }

  onDetailPage(item: any) {
    this.sharedSrv.setMarketTypeDetails(item);
    this.router.navigate(['/markets-serve/market-type'], { state: item });
  }
}
