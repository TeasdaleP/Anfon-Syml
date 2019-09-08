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

});
