import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-market-type',
  templateUrl: './market-type.component.html',
  styleUrls: ['./market-type.component.scss']
})
export class MarketTypeComponent implements OnInit {

  data: any = {};

  constructor(
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
