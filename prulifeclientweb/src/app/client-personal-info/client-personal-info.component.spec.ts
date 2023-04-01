import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPersonalInfoComponent } from './client-personal-info.component';

describe('ClientPersonalInfoComponent', () => {
  let component: ClientPersonalInfoComponent;
  let fixture: ComponentFixture<ClientPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
