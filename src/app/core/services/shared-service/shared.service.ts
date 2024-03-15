import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private marketTypeDetails = new BehaviorSubject<any>({});
  dataMarketTypeDetails$ = this.marketTypeDetails.asObservable();

  setMarketTypeDetails(data: any) {
    this.marketTypeDetails.next(data);
  }
}
