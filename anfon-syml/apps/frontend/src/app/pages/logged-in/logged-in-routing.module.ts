// -- Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- Components
import { LoggedInComponent } from './logged-in.component';
import { OverviewComponent } from './overview/overview.component';
import { MessageComponent } from './message/message.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomerTimelineComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: ':id',
    component: LoggedInComponent,
    children: [
      { path: 'overview', outlet: 'auth', component: OverviewComponent },
      { path: 'message', outlet: 'auth', component: MessageComponent },
      { path: 'analytics', outlet: 'auth', component: AnalyticsComponent },
      { path: 'customer', outlet: 'auth', component: CustomerTimelineComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
