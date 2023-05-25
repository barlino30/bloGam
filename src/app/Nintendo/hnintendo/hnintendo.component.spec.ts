import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnintendoComponent } from './hnintendo.component';

describe('HnintendoComponent', () => {
  let component: HnintendoComponent;
  let fixture: ComponentFixture<HnintendoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HnintendoComponent]
    });
    fixture = TestBed.createComponent(HnintendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
