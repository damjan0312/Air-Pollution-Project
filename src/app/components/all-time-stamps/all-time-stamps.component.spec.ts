import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeStampsComponent } from './all-time-stamps.component';

describe('AllTimeStampsComponent', () => {
  let component: AllTimeStampsComponent;
  let fixture: ComponentFixture<AllTimeStampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimeStampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
