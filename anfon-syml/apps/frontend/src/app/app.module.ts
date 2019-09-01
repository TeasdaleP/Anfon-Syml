import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebase = {
  apiKey: "AIzaSyD2wURbsSpJ0GJzkSkNkQgFgyli5osfVv8",
  authDomain: "anfon-syml.firebaseapp.com",
  databaseURL: "https://anfon-syml.firebaseio.com",
  projectId: "anfon-syml",
  storageBucket: "anfon-syml.appspot.com",
  messagingSenderId: "956001413127",
  appId: "1:956001413127:web:1de7163b17262245"
}

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
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes , { initialNavigation: 'enabled' }),
    ChartsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
