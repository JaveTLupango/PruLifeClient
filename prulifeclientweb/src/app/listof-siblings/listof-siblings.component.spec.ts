import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofSiblingsComponent } from './listof-siblings.component';

describe('ListofSiblingsComponent', () => {
  let component: ListofSiblingsComponent;
  let fixture: ComponentFixture<ListofSiblingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofSiblingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofSiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
