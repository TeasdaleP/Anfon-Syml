import { MessageComponent } from './message.component';
import { Observable, of } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { TestBed } from "@angular/core/testing";
import { Router } from '@angular/router';

const mockRouter = {
  navigate: jasmine.createSpy('navigate').and.returnValue(true)
};

const input = [[
  { username: 'name', password: 'pass'}
]];

const data = of(input);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('Logged Out Component', () => {
  let component: MessageComponent;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageComponent,
        { provide: Router, useValue: mockRouter },
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });

    component = TestBed.get(MessageComponent);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Error and Success should be initalised', () => {
    component.ngOnInit();
    expect(component.error).toBe(false);
    expect(component.success).toBe(false);
  });

  it('Title should be simple send', () => {
    component.ngOnInit();
    expect(component.title).toBe('simple send');
    expect(component.duplicate).toBe(0);
  });

});

