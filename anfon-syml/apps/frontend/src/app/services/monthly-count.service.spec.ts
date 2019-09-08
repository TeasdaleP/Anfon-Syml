import { MonthlyTotalService } from "./monthly-count.service";
import { of } from 'rxjs';

describe('Monthly Total Service', () => {
  let service: MonthlyTotalService;
  let mockFirestore, comms;

  comms = {}

  mockFirestore = {
    collection: () => of(comms)
  }

  beforeEach( () => {
    service = new MonthlyTotalService(mockFirestore);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

});
