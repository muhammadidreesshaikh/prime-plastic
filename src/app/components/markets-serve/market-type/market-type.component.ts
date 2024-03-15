import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared-service/shared.service';

@Component({
  selector: 'app-market-type',
  templateUrl: './market-type.component.html',
  styleUrls: ['./market-type.component.scss']
})
export class MarketTypeComponent implements OnInit {

  data: any = {};

  constructor(
    private router: Router,
    private sharedSrv: SharedService
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.getMarketTypePageDataSync();
  }

  getMarketTypePageDataSync() {
    this.sharedSrv.dataMarketTypeDetails$.subscribe(res => {
      this.data = res;
    })
  }

}
