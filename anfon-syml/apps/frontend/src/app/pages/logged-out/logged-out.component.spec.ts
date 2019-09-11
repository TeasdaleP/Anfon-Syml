import { Observable, of } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { TestBed } from "@angular/core/testing";
import { LoggedOutComponent } from './logged-out.component';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const mockRouter = { navigate: jasmine.createSpy('navigate').and.returnValue(true) };
const input = [[ { username: 'user', password: 'pass', id: 'id'} ]];
const data = of(input);
const collectionStub = { valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data) };
const angularFirestoreStub = { collection: jasmine.createSpy('collection').and.returnValue(collectionStub) };

describe('Logged Out Component', () => {
  let component: LoggedOutComponent;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggedOutComponent,
        ReactiveFormsModule,
        { provide: Router, useValue: mockRouter },
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });

    component = TestBed.get(LoggedOutComponent);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Error should be undefined', () => {
    expect(component.error).toBeUndefined();
  });

  it('Error should be false on initalised', () => {
    component.ngOnInit();
    expect(component.error).toBe(false);
  });

  it('Should have valid/pristine form groups', () => {
    component.login();
    expect(component.loginForm.valid).toBe(true);
    expect(component.loginForm.pristine).toBe(true);
  });

  it('Login function should login if the credentials match', () => {
    component.loginForm.controls['username'].setValue('user');
    component.loginForm.controls['password'].setValue('pass');
    component.login();
    expect(component.loginForm.valid).toBeTruthy();
  });

});
