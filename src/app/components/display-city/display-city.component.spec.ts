import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCityComponent } from './display-city.component';

describe('DisplayCityComponent', () => {
  let component: DisplayCityComponent;
  let fixture: ComponentFixture<DisplayCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
