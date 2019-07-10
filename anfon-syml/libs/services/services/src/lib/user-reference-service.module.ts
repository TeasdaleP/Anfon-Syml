import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})

export class UserReferenceServiceModule {
  private _userReference: string;

  constructor() {}

    public setUserReference(reference: string){
        this._userReference = reference;
    }

    public getUserReference(): string {
        return this._userReference;
    }

}
