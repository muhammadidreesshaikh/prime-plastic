import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketsServeComponent } from './markets-serve.component';
import { MarketTypeComponent } from './market-type/market-type.component';


const routes: Routes = [
  {
    path: '',
    component: MarketsServeComponent,
    children: [
      {
        path: '',
        component: MarketTypeComponent
      },
      {
        path: 'market-type',
        component: MarketTypeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsServeRoutingModule { }
