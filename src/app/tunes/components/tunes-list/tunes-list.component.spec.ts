import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesListComponent } from './tunes-list.component';

describe('TunesListComponent', () => {
  let component: TunesListComponent;
  let fixture: ComponentFixture<TunesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TunesListComponent]
    });
    fixture = TestBed.createComponent(TunesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
