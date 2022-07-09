import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsServeRoutingModule } from './markets-serve-routing.module';
import { MarketsServeComponent } from './markets-serve.component';
import { MarketTypeComponent } from './market-type/market-type.component';


@NgModule({
  declarations: [
    MarketsServeComponent,
    MarketTypeComponent
  ],
  imports: [
    CommonModule,
    MarketsServeRoutingModule
  ]
})
export class MarketsServeModule { }
