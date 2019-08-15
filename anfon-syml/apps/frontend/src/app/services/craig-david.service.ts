import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class CraigDavigService {
  day = new Date();

  constructor() { }

  lastSevenDays(): any {
    const date = this.day.getDate();
    const month = this.day.getMonth();
    let datearray = [];
    datearray = [
      date-6+'/'+(month+1),
      date-5+'/'+(month+1),
      date-4+'/'+(month+1),
      date-3+'/'+(month+1),
      date-2+'/'+(month+1),
      date-1+'/'+(month+1),
      date+'/'+(month+1)
    ]
    return datearray;
  }

}
