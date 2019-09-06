import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITemplates } from '../../../data-model/template.model';

@Component({
  selector: "anfon-syml-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.css"]
})

export class TemplateComponent implements OnInit {
  public content: string;
  public templateForm = new FormGroup({
    title: new FormControl(''),
    channel: new FormControl(''),
    content: new FormControl('')
  });
  public title: string;
  public remaining: number;
  public template: ITemplates;
  private collection: AngularFirestoreCollection;
  template$: Observable<any[]>;

  constructor (private data: AngularFirestore) { }

  ngOnInit() {
    this.title = "template builder";
    this.collection = this.data.collection('templates');
    this.template$ = this.collection.valueChanges();
  }

  public onSubmit() {
    if(this.templateForm.valid){
      const today = new Date;
      this.template = {
        date: today,
        title: this.templateForm.value.title,
        channel: this.templateForm.value.channel,
        content: this.templateForm.value.content
      }
      this.collection.add(this.template);
    }
  }
}
