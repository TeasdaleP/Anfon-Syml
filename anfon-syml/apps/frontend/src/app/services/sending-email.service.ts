import { Injectable } from '@angular/core';
import { Email } from '../interface/message.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class EmailSendingService {

  constructor() {}

  public send(email: Email){
    const url = this.urlBuilder(email);
    axios.post(url)
      .then(res => {
        console.log('Your email has sent successfully');
      })
      .catch(err => {
        console.log(err);
      });
  }

  private urlBuilder(email: Email): string {
    return encodeURI(``);
   }

}
