import { Component, OnInit } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: "anfon-syml-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})

export class ProfileComponent implements OnInit {
  public title: string;
  private collection: AngularFirestoreCollection;
  user$: Observable<any[]>;

  constructor (private data: AngularFirestore) {}

  ngOnInit() {
    this.title = 'Profile';
    this.collection = this.data.collection('users');
    this.user$ = this.collection.valueChanges();
  }
}
