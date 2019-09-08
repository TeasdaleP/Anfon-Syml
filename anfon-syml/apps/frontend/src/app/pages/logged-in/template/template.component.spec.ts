import { TemplateComponent } from "./template.component";

describe('Template Component', () => {
  let component: TemplateComponent;
  let mockFirestore;

  mockFirestore = {
    collection: () => {}
  }

  beforeEach( () => {
    component = new TemplateComponent(mockFirestore);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });


})
