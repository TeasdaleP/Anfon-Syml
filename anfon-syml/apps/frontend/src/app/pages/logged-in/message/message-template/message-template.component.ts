import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-message-template",
  templateUrl: "./message-template.component.html",
  styleUrls: ["./message-template.component.css"]
})

export class MessageTemplateComponent implements OnInit {
  public title: string;

  constructor () {}

  ngOnInit() {
    this.title = "message template";
  }
}
