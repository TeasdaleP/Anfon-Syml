import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "anfon-syml-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})

export class MessageComponent implements OnInit {
  public title: string;
  public messageForm = new FormGroup({
    template: new FormControl(''),
    reference: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl('')
  })


  constructor () {}

  ngOnInit() {
    this.title = "simple send";
  }

  public onSubmit() {
    console.log(this.messageForm.value);
  }
}
