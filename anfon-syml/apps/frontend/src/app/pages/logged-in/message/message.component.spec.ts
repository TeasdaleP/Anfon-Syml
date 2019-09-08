import { MessageComponent } from './message.component';
import { of } from 'rxjs';

describe('Message Component', () => {
  let component: MessageComponent;
  let mockFirestore, comms;

  comms = {}

  mockFirestore = {
    collection: () => of(comms)
  }

  beforeEach( () => {
    component = new MessageComponent(mockFirestore);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

});
