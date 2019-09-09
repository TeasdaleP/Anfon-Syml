import { Observable, of } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { TestBed } from "@angular/core/testing";
import { TemplateComponent } from './template.component';
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
  let component: TemplateComponent;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TemplateComponent,
        { provide: Router, useValue: mockRouter },
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });

    component = TestBed.get(TemplateComponent);
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

  it('Title should be template builder', () => {
    component.ngOnInit();
    expect(component.title).toBe('template builder');
    expect(component.duplicate).toBe(0);
  });

});
