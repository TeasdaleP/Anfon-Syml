import { CustomerTimelineComponent } from "./customer.component";
import { of } from 'rxjs';

describe('Customer Timeline Component', () => {
  let component: CustomerTimelineComponent;
  let user, mockFirestore;

  user = {}

  mockFirestore = {
    collection: () => of(user)
  }

  beforeEach( () => {
    component = new CustomerTimelineComponent(mockFirestore);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

});
