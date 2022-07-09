import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  collection: string = "product-catalog";

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCatalog() {
    return this.firestore.collection(this.collection).valueChanges();
  }

}
