import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})

export class OverviewComponent implements OnInit {
  public title: string;

  constructor () {}

  ngOnInit() {
    this.title = "overview";
  }
}
