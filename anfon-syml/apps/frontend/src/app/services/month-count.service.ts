import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MonthlyCountService {
  public _jan: number;
  public _feb: number;
  public _mar: number;
  public _apr: number;
  public _may: number;
  public _jun: number;
  public _jul: number;
  public _aug: number;
  public _sep: number;
  public _oct: number;
  public _nov: number;
  public _dec: number;

  constructor() {
    this._aug = 5;
    this._sep = 11;
    this._oct = 20;
  }

  public getMonthlyArray(): Array<number> {
    return [this._jan, this._feb, this._mar, this._apr, this._may, this._jun, this._jul, this._aug, this._sep, this._oct, this._nov, this._dec];
  }

  
}

