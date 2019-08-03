// -- Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Components
import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import { OverviewComponent } from './overview/overview.component';
import { MessageComponent } from './message/message.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomerTimelineComponent } from './customer/customer.component';

const COMPONENTS = [
  LoggedInComponent,
  OverviewComponent,
  MessageComponent,
  AnalyticsComponent,
  CustomerTimelineComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    LoggedInRoutingModule
  ],
  exports: [COMPONENTS]
})

export class LoggedInModule { }
