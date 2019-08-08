// -- Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

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
    LoggedOutRoutingModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  exports: [COMPONENTS]
})

export class LoggedOutModule { }
