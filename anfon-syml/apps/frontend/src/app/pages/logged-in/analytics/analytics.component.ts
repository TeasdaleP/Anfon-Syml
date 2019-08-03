import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"]
})

export class AnalyticsComponent implements OnInit {
  public title: string;

  constructor () {}

  ngOnInit() {
    this.title = "analytics";
  }
}
