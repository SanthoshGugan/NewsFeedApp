import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSpecificComponent } from './news-specific.component';

describe('NewsSpecificComponent', () => {
  let component: NewsSpecificComponent;
  let fixture: ComponentFixture<NewsSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
