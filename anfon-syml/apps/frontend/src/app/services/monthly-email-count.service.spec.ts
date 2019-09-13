import { MonthlyEmailTotalService } from "./monthly-email-count.service";
import { of } from 'rxjs';

describe('Monthly Email Service', () => {
  let service: MonthlyEmailTotalService;
  let mockFirestore, comms;

  comms = {}

  mockFirestore = {
    collection: () => of(comms)
  }

  beforeEach( () => {
    service = new MonthlyEmailTotalService(mockFirestore);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

});