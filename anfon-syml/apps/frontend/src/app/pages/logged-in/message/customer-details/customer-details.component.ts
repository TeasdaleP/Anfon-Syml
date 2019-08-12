import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})

export class CustomerDetailsComponent implements OnInit {
  public title: string;

  constructor () {}

  ngOnInit() {
    this.title = "customer details";
  }
}
