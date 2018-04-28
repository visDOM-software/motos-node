import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPaginationComponent } from './control-pagination.component';

describe('ControlPaginationComponent', () => {
  let component: ControlPaginationComponent;
  let fixture: ComponentFixture<ControlPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
