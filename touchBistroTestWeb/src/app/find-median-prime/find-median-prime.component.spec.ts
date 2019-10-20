import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMedianPrimeComponent } from './find-median-prime.component';

describe('FindMedianPrimeComponent', () => {
  let component: FindMedianPrimeComponent;
  let fixture: ComponentFixture<FindMedianPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMedianPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMedianPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
