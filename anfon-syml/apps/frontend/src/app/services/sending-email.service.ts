import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})

export interface Email {
  title: string;
}

export class EmailSendingService {

  constructor() {}

  public send(email: Email){

  }

}
