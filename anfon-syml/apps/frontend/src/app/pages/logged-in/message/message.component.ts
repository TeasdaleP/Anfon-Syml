import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})

export class MessageComponent implements OnInit {
  public title: string;

  constructor () {}

  ngOnInit() {
    this.title = "simple send";
  }
}
