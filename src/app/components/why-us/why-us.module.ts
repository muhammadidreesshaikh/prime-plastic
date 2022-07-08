import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyUsRoutingModule } from './why-us-routing.module';
import { WhyUsComponent } from './why-us.component';
import { OverviewComponent } from './overview/overview.component';
import { CustomerCentricApproachComponent } from './customer-centric-approach/customer-centric-approach.component';
import { TheTeamComponent } from './the-team/the-team.component';


@NgModule({
  declarations: [
    WhyUsComponent,
    OverviewComponent,
    CustomerCentricApproachComponent,
    TheTeamComponent
  ],
  imports: [
    CommonModule,
    WhyUsRoutingModule
  ]
})
export class WhyUsModule { }
