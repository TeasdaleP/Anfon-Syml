import { AnalyticsComponent } from "./analytics.component";

describe('Analytics Component', () => {
  let component: AnalyticsComponent;
  let mockTotalCount;

  mockTotalCount = {
    getDailyTotal: () => {},
    getMonthlyTotal: () => {},
    getYearlyTotal: () => {}
  }

  beforeEach( () => {
    component = new AnalyticsComponent(mockTotalCount);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

});
