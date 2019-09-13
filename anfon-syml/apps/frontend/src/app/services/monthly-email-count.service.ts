import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MonthlyEmailTotalService {
  private _jan: number;
  private _feb: number;
  private _mar: number;
  private _apr: number;
  private _may: number;
  private _jun: number;
  private _jul: number;
  private _aug: number;
  private _sep: number;
  private _oct: number;
  private _nov: number;
  private _dec: number;
  
  constructor(private data: AngularFirestore) {
    this._jan = 0;
    this._feb = 0;
    this._mar = 0;
    this._apr = 0; 
    this._may = 0;
    this._jun = 0;
    this._jul = 0;
    this._aug = 0;
    this._sep = 0;
    this._oct = 0;
    this._nov = 0;
    this._dec = 0;
  }

  public january(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 1){
          this._jan = this._jan+1;
        }
      });
    });
    return this._jan;
  }

  public february(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 2){
          this._feb = this._feb+1;
        }
      });
    });
    return this._feb;
  }

  public march(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 3){
          this._mar = this._mar+1;
        }
      });
    });
    return this._mar;
  }

  public april(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 4){
          this._apr = this._apr+1;
        }
      });
    });
    return this._apr;
  }

  public may(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 5){
          this._may = this._may+1;
        }
      });
    });
    return this._may;
  }

  public june(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 6){
          this._jun = this._jun+1;
        }
      });
    });
    return this._jun;
  }

  public july(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 7){
          this._jul = this._jul+1;
        }
      });
    });
    return this._jul;
  }

  public august(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 8){
          this._aug = this._aug+1;
        }
      });
    });
    return this._aug;
  }

  public september(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 9){
          this._sep = this._sep+1;
        }
      });
    });
    return this._sep;
  }

  public october(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 10){
          this._oct = this._oct+1;
        }
      });
    });
    return this._oct;
  }

  public november(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 11){
          this._nov = this._nov+1;
        }
      });
    });
    return this._nov;
  }

  public december(): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const date =  contact.date.toDate().getMonth()+1; 
        if(contact.channel === 'Email' && date === 12){
          this._dec = this._dec+1;
        }
      });
    });
    return this._dec;
  }

  private collection(): Observable<any> {
    return this.data.collection('communications').valueChanges();
  }
}

