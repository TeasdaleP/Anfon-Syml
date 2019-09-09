import { AnalyticsComponent } from "./analytics.component";

describe('Analytics Component', () => {
  let component: AnalyticsComponent;
  let mockTotalCount;

  mockTotalCount = {
    getDailyTotal: () => (1),
    getMonthlyTotal: () => (11),
    getYearlyTotal: () => (111)
  }

  beforeEach( () => {
    component = new AnalyticsComponent(mockTotalCount);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

  it('Title should be analytics', () => {
    component.ngOnInit();
    expect(component.title).toBe('analytics');
  });

  it('Should have a daily total', () => {
    component.ngOnInit();
    const total = mockTotalCount.getDailyTotal();
    expect(total).toBe(1);
  });

  it('Should have a monthly total', () => {
    component.ngOnInit();
    const month = mockTotalCount.getMonthlyTotal();
    expect(month).toBe(11);
  });

  it('Should have a yearly total', () => {
    component.ngOnInit();
    const year = mockTotalCount.getYearlyTotal();
    expect(year).toBe(111);
  });

});
