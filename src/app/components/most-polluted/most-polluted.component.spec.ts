import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPollutedComponent } from './most-polluted.component';

describe('MostPollutedComponent', () => {
  let component: MostPollutedComponent;
  let fixture: ComponentFixture<MostPollutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPollutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPollutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
