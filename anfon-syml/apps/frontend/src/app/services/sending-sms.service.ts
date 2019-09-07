import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})

export interface SMS {
  name: string;
}

export class TextSendingService {

  constructor() {}

  public send(user: SMS){

  }
}
