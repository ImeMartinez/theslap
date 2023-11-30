import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotPagesComponent } from './hot-pages.component';

describe('HotPagesComponent', () => {
  let component: HotPagesComponent;
  let fixture: ComponentFixture<HotPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotPagesComponent]
    });
    fixture = TestBed.createComponent(HotPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
