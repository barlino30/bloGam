import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HplayComponent } from './hplay.component';

describe('HplayComponent', () => {
  let component: HplayComponent;
  let fixture: ComponentFixture<HplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HplayComponent]
    });
    fixture = TestBed.createComponent(HplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
