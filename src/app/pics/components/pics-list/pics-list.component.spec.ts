import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsListComponent } from './pics-list.component';

describe('PicsListComponent', () => {
  let component: PicsListComponent;
  let fixture: ComponentFixture<PicsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicsListComponent]
    });
    fixture = TestBed.createComponent(PicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
