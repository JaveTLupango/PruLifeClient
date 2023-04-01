import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsentTermsConditionComponent } from './user-consent-terms-condition.component';

describe('UserConsentTermsConditionComponent', () => {
  let component: UserConsentTermsConditionComponent;
  let fixture: ComponentFixture<UserConsentTermsConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConsentTermsConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConsentTermsConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
