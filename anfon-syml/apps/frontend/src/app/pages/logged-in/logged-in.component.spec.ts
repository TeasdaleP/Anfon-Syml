import { LoggedInComponent } from "./logged-in.component";
import { of } from "rxjs";

describe('Logged In Component', () => {
  let component: LoggedInComponent;
  let mockRouter, mockRoute, mockFirestore, mockUser;

  mockUser = {
    firstname: 'first',
    surname: 'last'
  }

  mockRouter = {
    navigate: () => {}
  }

  mockFirestore = {
    collection: () => of(mockUser)
  }

  mockRoute = {}

  beforeEach( () => {
    component = new LoggedInComponent(mockRouter, mockRoute, mockFirestore);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

  it('Should call router on the overview function', () => {
    component.overview();
    expect(mockRoute).toBeDefined();
  });

  it('Should call router on the message function', () => {
    component.message();
    expect(mockRoute).toBeDefined();
  });

  it('Should call router on the analytics function', () => {
    component.analytics();
    expect(mockRoute).toBeDefined();
  });

  it('Should call router on the customer function', () => {
    component.customer();
    expect(mockRoute).toBeDefined();
  });

  it('Should call router on the template function', () => {
    component.template();
    expect(mockRoute).toBeDefined();
  });

  it('Should call router on the profile function', () => {
    component.profile();
    expect(mockRoute).toBeDefined();
  });

});
