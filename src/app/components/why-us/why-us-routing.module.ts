import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhyUsComponent } from './why-us.component';
import { OverviewComponent } from './overview/overview.component';
import { CustomerCentricApproachComponent } from './customer-centric-approach/customer-centric-approach.component';
import { TheTeamComponent } from './the-team/the-team.component';

const routes: Routes = [
  {
    path: '',
    component: WhyUsComponent,
    children: [
      {
        path: '',
        component: OverviewComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'customer-centric-approach',
        component: CustomerCentricApproachComponent
      },
      {
        path: 'the-team',
        component: TheTeamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyUsRoutingModule { }
