// -- Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

// -- Components
import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import { OverviewComponent } from './overview/overview.component';
import { MessageComponent } from './message/message.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomerTimelineComponent } from './customer/customer.component';
import { OverviewChartComponent } from './analytics/overview-chart/overview-chart.component';
import { FinancialChartComponent } from './analytics/financial-chart/financial-chart.component';
import { MessageTemplateComponent } from './message/message-template/message-template.component';
import { CustomerDetailsComponent } from './message/customer-details/customer-details.component';
import { MessageReviewComponent } from './message/message-review/message-review.component';
import { MessageSendingComponent } from './message/message-sending/message-sending.component';

const COMPONENTS = [
  LoggedInComponent,
  OverviewComponent,
  MessageComponent,
  AnalyticsComponent,
  CustomerTimelineComponent,
  OverviewChartComponent,
  FinancialChartComponent,
  MessageTemplateComponent,
  CustomerDetailsComponent,
  MessageReviewComponent,
  MessageSendingComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    ChartsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports: [COMPONENTS]
})

export class LoggedInModule { }
