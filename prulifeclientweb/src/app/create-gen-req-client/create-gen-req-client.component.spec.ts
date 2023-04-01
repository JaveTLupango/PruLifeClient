import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenReqClientComponent } from './create-gen-req-client.component';

describe('CreateGenReqClientComponent', () => {
  let component: CreateGenReqClientComponent;
  let fixture: ComponentFixture<CreateGenReqClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGenReqClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGenReqClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
