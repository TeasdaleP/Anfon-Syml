import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsernameService {
  private _username: string;

  constructor() {}

  public setUser(user: string){
    this._username = user;
  }

  public getUser(): string {
    return this._username;
  }
}
