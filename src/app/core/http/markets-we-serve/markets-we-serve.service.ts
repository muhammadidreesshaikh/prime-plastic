import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MarketsWeServeService {

  collection: string = "categories";

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCategories() {
    return this.firestore.collection(this.collection).valueChanges();
  }
}
