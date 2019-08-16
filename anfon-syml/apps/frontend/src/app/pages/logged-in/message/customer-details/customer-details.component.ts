import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "anfon-syml-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})

export class CustomerDetailsComponent implements OnInit {
  public title: string;
  public customerForm = new FormGroup({
    reference: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl('')
  })

  constructor () {}

  ngOnInit() {
    this.title = "customer details";
  }

  public onSubmit() {
    console.log(this.customerForm.value);
  }
}
