import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsServeRoutingModule } from './markets-serve-routing.module';
import { MarketsServeComponent } from './markets-serve.component';


@NgModule({
  declarations: [
    MarketsServeComponent
  ],
  imports: [
    CommonModule,
    MarketsServeRoutingModule
  ]
})
export class MarketsServeModule { }
