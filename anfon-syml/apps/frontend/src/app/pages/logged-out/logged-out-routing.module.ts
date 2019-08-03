// -- Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- Components
import { LoggedOutComponent } from './logged-out.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedOutRoutingModule { }
