import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRightNowComponent } from './the-right-now.component';

describe('TheRightNowComponent', () => {
  let component: TheRightNowComponent;
  let fixture: ComponentFixture<TheRightNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheRightNowComponent]
    });
    fixture = TestBed.createComponent(TheRightNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
