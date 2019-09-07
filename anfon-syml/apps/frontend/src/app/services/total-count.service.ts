import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class TotalCountService {
  communication$: Observable<any[]>;
  private collection: AngularFirestoreCollection;
  public date: Date;
  public _day: number;
  public _month: number;
  public _year: number;

  constructor(private data: AngularFirestore) {
    this.collection = this.data.collection('communications');
    this.communication$ = this.collection.valueChanges();
    this._day = 0;
    this._month = 0;
    this._year = 0;
    this.date = new Date;
  }

  public getDailyTotal(): number {
    const day = this.date;
    const month = this.date.getMonth()+1;
    console.warn('counts', day, month);
    this.data.collection('communications').snapshotChanges().subscribe(comms=> {
      
      console.warn(comms);
      
    });
    return this._day;
  }

  public getMonthlyTotal(): number {

    return this._month;
  }

  public getYearlyTotal(): number {
    this.communication$.forEach(comms => {
      this._year = comms.length;
    })
    return this._year;
  }
}
