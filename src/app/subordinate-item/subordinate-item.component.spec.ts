import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinateItemComponent } from './subordinate-item.component';

describe('SubordinateItemComponent', () => {
  let component: SubordinateItemComponent;
  let fixture: ComponentFixture<SubordinateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubordinateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubordinateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
