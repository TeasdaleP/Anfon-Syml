// -- Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- Components
import { LoggedInComponent } from './logged-in.component';
import { OverviewComponent } from './overview/overview.component';
import { MessageComponent } from './message/message.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomerTimelineComponent } from './customer/customer.component';
import { TemplateComponent } from './template/template.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: ':id',
    component: LoggedInComponent,
    children: [
      { path: 'overview', outlet: 'auth', component: OverviewComponent },
      { path: 'message', outlet: 'auth', component: MessageComponent },
      { path: 'analytics', outlet: 'auth', component: AnalyticsComponent },
      { path: 'template', outlet: 'auth', component: TemplateComponent },
      { path: 'customer', outlet: 'auth', component: CustomerTimelineComponent },
      { path: 'profile', outlet: 'auth', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
