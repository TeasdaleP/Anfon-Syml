import { ProfileComponent } from "./profile.component";
import { of } from 'rxjs';

describe('Profile Component', () => {
  let mockFireStore, mockUser;
  let component: ProfileComponent;

  mockUser = {
    name: 'Full Name'
  }

  mockFireStore = {
    collection: () => of(mockUser),
    valueChanges: () => {}
  }

  beforeEach( () => {
    component = new ProfileComponent(mockFireStore);
  })

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

  it('Title Should be displayed', () => {
    component.title = 'Profile';
    expect(component.title).toBe('Profile');
  });
})
