import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Channel } from '../enums/channel.enum';

@Injectable({
  providedIn: 'root'
})

export class MonthlyTotalService {
  private _total: number;
  

  constructor(private data: AngularFirestore) {
    this._total = 0;
  }

  public monthTotal(month: number, channel: Channel): number {
    this.collection().subscribe(data => {
      data.forEach(contact => {
        const loopedDate = contact.date.toDate();
        const retrievedMonth = loopedDate.getMonth()+1;
        // console.log('Month', retrievedMonth);
        // console.log('Channel', contact.channel);
        // console.log('Passed', month);
        // console.warn('----------');
        if(contact.channel === channel){
          if(retrievedMonth === month){
            this._total+=1;
          }
        }
      });
    });
    return this._total;
  }

  private collection(): Observable<any> {
    return this.data.collection('communications').valueChanges();
  }
}

