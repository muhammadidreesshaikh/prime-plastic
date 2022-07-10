import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class MarketsWeServeService {

  collection: string = "categories";

  constructor(
    private firestore: AngularFirestore,
    private localSt: LocalStorageService,
    private router: Router
  ) { }

  getCategories() {
    return this.firestore.collection(this.collection).valueChanges();
  }

  getCategoriesFromSession() {
    return this.localSt.observe(this.collection);
  }

  onDetailPage(item: any) {
    this.router.navigate(['/markets-serve/market-type'], { state: item });
  }
}
