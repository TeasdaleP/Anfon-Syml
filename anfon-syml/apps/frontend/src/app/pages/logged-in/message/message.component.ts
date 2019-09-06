import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICommunications } from '../../../data-model/communications.model';

@Component({
  selector: "anfon-syml-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})

export class MessageComponent implements OnInit {
  public title: string;
  public communication: ICommunications;
  public messageForm = new FormGroup({
    template: new FormControl(''),
    channel: new FormControl(''),
    reference: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl('')
  })
  private commsCollect: AngularFirestoreCollection;
  private templateCollect: AngularFirestoreCollection;
  communication$: Observable<any[]>;
  template$: Observable<any[]>


  constructor (private data: AngularFirestore) {}

  ngOnInit() {
    this.title = "simple send";
    this.commsCollect = this.data.collection('communications');
    this.communication$ = this.commsCollect.valueChanges();
    this.templateCollect = this.data.collection('templates');
    this.template$ = this.templateCollect.valueChanges();
  }

  public onSubmit() {
    if(this.messageForm.valid){
      const today = new Date;
      this.communication = {
        date: today,
        customer: {
          telephone: this.messageForm.value.telephone,
          email: this.messageForm.value.email,
          reference: this.messageForm.value.reference
        },
        channel: this.messageForm.value.channel,
        template: this.messageForm.value.template
      }
      this.commsCollect.add(this.communication);
    }
  }
}
