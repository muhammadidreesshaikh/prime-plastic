import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketsWeServeService {

  data = new Subject<any>();
  collection: string = "categories";

  constructor(
    private firestore: AngularFirestore,
    private localSt: LocalStorageService,
    private router: Router
  ) { }

  setData(value: any) {
    this.data.next(value);

    this.data.subscribe(res => {
      console.log(res);
      
    })
  }

  getData() {
    return this.data;
  }

  getCategories() {
    return this.firestore.collection(this.collection).valueChanges();
  }

  getCategoriesFromSession() {
    return this.localSt.observe(this.collection);
  }

  onDetailPage(item: any) {
    this.setData(item);
    this.router.navigateByUrl('/markets-serve/market-type');
  }
}
