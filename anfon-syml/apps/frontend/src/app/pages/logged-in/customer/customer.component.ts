import { Component, OnInit } from "@angular/core";
import { ICommunications } from '../../../data-model/communications.model';
import { Channel } from '../../../enums/channel.enum';

@Component({
  selector: "anfon-syml-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})

export class CustomerTimelineComponent implements OnInit {
  public searchText: string;
  public title: string;
  public customers: Array<ICommunications>;

  constructor () {}

  ngOnInit() {
    this.title = "customer timeline";
    this.customers = [
      { date: '01/02/1985', customer: {
          reference: 'ref:0001',
          email: 'email@address.com',
          telephone: '02920123456'
        }, template: ['q', 'a', 'A']
      },
    ]
  }
}
