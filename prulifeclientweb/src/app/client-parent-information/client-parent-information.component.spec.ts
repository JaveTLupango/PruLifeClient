import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientParentInformationComponent } from './client-parent-information.component';

describe('ClientParentInformationComponent', () => {
  let component: ClientParentInformationComponent;
  let fixture: ComponentFixture<ClientParentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientParentInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientParentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
