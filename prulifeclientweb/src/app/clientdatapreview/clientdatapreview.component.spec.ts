import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdatapreviewComponent } from './clientdatapreview.component';

describe('ClientdatapreviewComponent', () => {
  let component: ClientdatapreviewComponent;
  let fixture: ComponentFixture<ClientdatapreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientdatapreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientdatapreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
