import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "anfon-syml-message-template",
  templateUrl: "./message-template.component.html",
  styleUrls: ["./message-template.component.css"]
})

export class MessageTemplateComponent implements OnInit {
  public title: string;
  public templateForm = new FormGroup({
    title: new FormControl(''),
    channel: new FormControl(''),
    content: new FormControl('')
  })

  constructor () {}

  ngOnInit() {
    this.title = "message template";
  }

  public onSubmit() {
    console.log(this.templateForm.value);
  }
}
