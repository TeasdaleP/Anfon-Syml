// -- Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [COMPONENTS]
})

export class LoggedOutModule { }
