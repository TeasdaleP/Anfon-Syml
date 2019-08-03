import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})

export class CustomerTimelineComponent implements OnInit {
  public title: string;

  constructor () {}

  ngOnInit() {
    this.title = "customer timeline";
  }
}
