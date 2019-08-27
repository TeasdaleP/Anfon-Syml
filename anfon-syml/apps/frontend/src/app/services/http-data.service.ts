import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpUrl } from '../enums/http-urls.enum';

@Injectable(
  { providedIn: 'root' }
)

export class HttpDataService {

  constructor(private http: HttpClient){}

  public getUsers() {
    return this.http.get(HttpUrl.User);
  }

  public getTemplates() {
    return this.http.get(HttpUrl.Templates);
  }

  public getCommunications() {
    return this.http.get(HttpUrl.Communications);
  }
}
