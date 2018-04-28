import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBlogSummaryComponent } from './control-blog-summary.component';

describe('ControlBlogSummaryComponent', () => {
  let component: ControlBlogSummaryComponent;
  let fixture: ComponentFixture<ControlBlogSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlBlogSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlBlogSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
