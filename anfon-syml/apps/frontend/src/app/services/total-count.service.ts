import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TotalCountService {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor() {
    this._day = 0;
    this._month = 0;
    this._year = 0;
  }

  public getDailyTotal(): number {
    return this._day;
  }

  public getMonthlyTotal(): number {
    return this._month;
  }

  public getYearlyTotal(): number {
    return this._year;
  }
}
