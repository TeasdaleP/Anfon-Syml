import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

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
    RouterModule.forRoot(routes , { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
