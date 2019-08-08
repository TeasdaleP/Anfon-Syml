// -- Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

// -- Components
import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import { OverviewComponent } from './overview/overview.component';
import { MessageComponent } from './message/message.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomerTimelineComponent } from './customer/customer.component';
import { OverviewChartComponent } from './analytics/overview-chart/overview-chart.component';
import { FinancialChartComponent } from './analytics/financial-chart/financial-chart.component';

const COMPONENTS = [
  LoggedInComponent,
  OverviewComponent,
  MessageComponent,
  AnalyticsComponent,
  CustomerTimelineComponent,
  OverviewChartComponent,
  FinancialChartComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    ChartsModule
  ],
  exports: [COMPONENTS]
})

export class LoggedInModule { }
