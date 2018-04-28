import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSideComponent } from './widget-side.component';

describe('WidgetSideComponent', () => {
  let component: WidgetSideComponent;
  let fixture: ComponentFixture<WidgetSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
