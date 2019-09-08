import { OverviewComponent } from "./overview.component";

describe('Overview Component', () => {
  let component: OverviewComponent;

  beforeEach( () => {
    component = new OverviewComponent();
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });

});
