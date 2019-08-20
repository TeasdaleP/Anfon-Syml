// -- Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// -- Components
import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import { OverviewComponent } from './overview/overview.component';
import { MessageComponent } from './message/message.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomerTimelineComponent } from './customer/customer.component';
import { OverviewChartComponent } from './analytics/overview-chart/overview-chart.component';
import { FinancialChartComponent } from './analytics/financial-chart/financial-chart.component';
import { TemplateComponent } from './template/template.component';

const COMPONENTS = [
  LoggedInComponent,
  OverviewComponent,
  MessageComponent,
  AnalyticsComponent,
  CustomerTimelineComponent,
  OverviewChartComponent,
  FinancialChartComponent,
  TemplateComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    ChartsModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [COMPONENTS]
})

export class LoggedInModule { }
