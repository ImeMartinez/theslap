import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNewStuffComponent } from './the-new-stuff.component';

describe('TheNewStuffComponent', () => {
  let component: TheNewStuffComponent;
  let fixture: ComponentFixture<TheNewStuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheNewStuffComponent]
    });
    fixture = TestBed.createComponent(TheNewStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
