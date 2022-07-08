import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketsServeComponent } from './markets-serve.component';

const routes: Routes = [
  { path: '', component: MarketsServeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsServeRoutingModule { }
