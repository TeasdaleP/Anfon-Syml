import { LoggedOutComponent } from "./logged-out.component";
import { of } from 'rxjs';

describe('Logged Out Component', () => {
  let component: LoggedOutComponent;
  let mockRouter, mockFirestore, mockUser;

  mockUser = {
    username: 'username',
    password: 'password'
  }

  mockRouter = {
    navigate: () => {}
  }

  mockFirestore = {
    collection: () => of(mockUser)
  }

  beforeEach( () => {
    component = new LoggedOutComponent(mockRouter, mockFirestore);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

});
