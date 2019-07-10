import { async, TestBed } from '@angular/core/testing';
import { UserReferenceServiceModule } from './user-reference-service.module';

describe('UserReferenceServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserReferenceServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserReferenceServiceModule).toBeDefined();
  });
});
