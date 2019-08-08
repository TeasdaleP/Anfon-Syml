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
      { id: 'C001', customer: { customerRef: 'R000000001', contact: { telephone: '07549545590', email: 'customer@reference.com'}},
        dateSent: '01/08/2019', content: { channel: Channel.Email, content: 'Welcome to Anfon-Syml. Hope you enjoy using the application and if you have any issues, please contact Phil Teasdale for more assistance.'}
      },
      {
        id: 'C002', customer: { customerRef: 'R000000002', contact: { telephone: '07799445599', email: 'cust@omer.com'}},
        dateSent: '02/08/2019', content: { channel: Channel.SMS, content: 'Welcome to Anfon-Syml. Hope you enjoy using the application and if you have any issues, please contact Phil Teasdale for more assistance.'}
      },
      {
        id: 'C003', customer: { customerRef: 'R000111002', contact: { telephone: '07799445599', email: 'cust@omer.com'}},
        dateSent: '02/08/2019', content: { channel: Channel.Email, content: 'Welcome to Anfon-Syml. Hope you enjoy using the application and if you have any issues, please contact Phil Teasdale for more assistance.'}
      }
    ]
  }
}
