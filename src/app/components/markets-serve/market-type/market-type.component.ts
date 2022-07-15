import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketsWeServeService } from 'src/app/core/http/markets-we-serve/markets-we-serve.service';

@Component({
  selector: 'app-market-type',
  templateUrl: './market-type.component.html',
  styleUrls: ['./market-type.component.scss']
})
export class MarketTypeComponent implements OnInit {

  data: any = {};
  
  constructor(
    private router: Router,
    private marketSrv: MarketsWeServeService
  ) {
    this.onGetPage();
  }

  ngOnInit(): void {
    this.onGetPage();
  }

  onGetPage() {
    this.marketSrv.getData().subscribe(res => {
      this.data = res;

      if (!this.data?.category) {
        this.router.navigateByUrl('/home');
      }
    });
  }

}
