import { TotalCountService } from "./total-count.service";

describe('Total Count Service', () => {
  let service: TotalCountService;

  beforeEach( () => {
    service = new TotalCountService();
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should retrieve daily count', () => {
    const daily = service.getDailyTotal()
    expect(daily).toBe(0);
  });

  it('Should retrieve monthly count', () => {
    const monthly = service.getMonthlyTotal()
    expect(monthly).toBe(0);
  });

  it('Should retrieve yearly count', () => {
    const yearly = service.getYearlyTotal()
    expect(yearly).toBe(0);
  });

});
