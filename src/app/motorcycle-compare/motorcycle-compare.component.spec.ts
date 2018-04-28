import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleCompareComponent } from './motorcycle-compare.component';

describe('MotorcycleCompareComponent', () => {
  let component: MotorcycleCompareComponent;
  let fixture: ComponentFixture<MotorcycleCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorcycleCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
