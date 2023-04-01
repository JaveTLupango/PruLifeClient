import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRequentClientComponent } from './generate-requent-client.component';

describe('GenerateRequentClientComponent', () => {
  let component: GenerateRequentClientComponent;
  let fixture: ComponentFixture<GenerateRequentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateRequentClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateRequentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
