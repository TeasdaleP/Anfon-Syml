// -- Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Components
import { LoggedOutRoutingModule } from './logged-out-routing.module';
import { LoggedOutComponent } from './logged-out.component';

const COMPONENTS = [
  LoggedOutComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    LoggedOutRoutingModule
  ],
  exports: [COMPONENTS]
})

export class LoggedOutModule { }