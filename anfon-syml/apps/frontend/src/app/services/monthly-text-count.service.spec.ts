import { MonthlyTextTotalService } from "./monthly-text-count.service";
import { of } from 'rxjs';

describe('Monthly Text Service', () => {
  let service: MonthlyTextTotalService;
  let mockFirestore, comms;

  comms = {}

  mockFirestore = {
    collection: () => of(comms)
  }

  beforeEach( () => {
    service = new MonthlyTextTotalService(mockFirestore);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

});
