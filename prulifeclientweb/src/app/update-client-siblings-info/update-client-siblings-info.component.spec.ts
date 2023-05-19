import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientSiblingsInfoComponent } from './update-client-siblings-info.component';

describe('UpdateClientSiblingsInfoComponent', () => {
  let component: UpdateClientSiblingsInfoComponent;
  let fixture: ComponentFixture<UpdateClientSiblingsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientSiblingsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientSiblingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
