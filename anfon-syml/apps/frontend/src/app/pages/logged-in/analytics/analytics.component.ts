import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"]
})

export class AnalyticsComponent implements OnInit {
  public title: string;
  public yearly: any;
  public weekly: any;
  public monthly: any;

  constructor () {}

  ngOnInit() {
    this.title = "analytics";
    this.weekly = {
      sms: 100,
      email: 100
    };
    this.monthly = {
      sms: 400,
      email: 400
    };
    this.yearly = {
      sms: 1000,
      email: 1000
    };
  }
}
