import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-message-sending",
  templateUrl: "./message-sending.component.html",
  styleUrls: ["./message-sending.component.css"]
})

export class MessageSendingComponent implements OnInit {
  public visualtemplate: boolean;
  public visualcustomer: boolean;
  public visualreview: boolean;

  constructor () {}

  ngOnInit() {
    this.visualtemplate = true;
    this.visualcustomer = false;
    this.visualreview = false
  }

  customer() {
    this.visualcustomer = true;
    this.visualtemplate = false;
    this.visualreview = false;
  }

  review() {
    this.visualreview = true;
    this.visualtemplate = false;
    this.visualcustomer = false;
  }

  template() {
    this.visualtemplate = true;
    this.visualcustomer = false;
    this.visualreview = false;
  }


}
