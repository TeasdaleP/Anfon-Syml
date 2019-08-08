import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {
    path: "",
    redirectTo: "logged-out",
    pathMatch: "full"
  },
  {
    path: "logged-in",
    loadChildren: () =>
      import("./pages/logged-in/logged-in.module").then(mod => mod.LoggedInModule)
  },
  {
    path: "logged-out",
    loadChildren: () =>
      import("./pages/logged-out/logged-out.module").then(mod => mod.LoggedOutModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes , { initialNavigation: 'enabled' }),
    ChartsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
