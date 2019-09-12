import { Injectable } from '@angular/core';
import { SMS } from '../interface/message.interface';
import { ApiKeys, HttpUrl } from '../enums/http-urls.enum';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class TextSendingService {

  constructor() {}

  public send(message: SMS) {
    const url = this.urlBuilder(message);
    axios.post(url)
      .then(res => {
        console.log('SMS has sent successfully');
      })
      .catch(err => {
        console.log(err);
      });
  }

  private urlBuilder(message: SMS): string {
   return encodeURI(`${HttpUrl.TextLocal}apikey=${ApiKeys.TextLocal}&numbers=${message.number}&message=${message.content}&sender=anfonsyml`);
  }
}
