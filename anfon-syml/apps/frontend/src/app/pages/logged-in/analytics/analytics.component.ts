import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"]
})

export class AnalyticsComponent implements OnInit {
  public title: string;
  public daily: any;
  public weekly: any;
  public monthly: any;

  constructor () {}

  ngOnInit() {
    this.title = "analytics";
    this.daily = {
      sms: 101,
      email: 134
    };
    this.weekly = {
      sms: 678,
      email: 973
    };
    this.monthly = {
      sms: 1591,
      email: 2192
    };
  }
}
