import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "anfon-syml-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})

export class CustomerTimelineComponent implements OnInit {
  public searchText: string;
  public title: string;
  communication$: Observable<any[]>;
  private collection: AngularFirestoreCollection;

  constructor (private data: AngularFirestore) {}

  ngOnInit() {
    this.title = "customer timeline";
    this.collection = this.data.collection('communications');
    this.communication$ = this.collection.valueChanges();
  }
}
