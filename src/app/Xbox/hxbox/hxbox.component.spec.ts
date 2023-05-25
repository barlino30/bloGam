import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HxboxComponent } from './hxbox.component';

describe('HxboxComponent', () => {
  let component: HxboxComponent;
  let fixture: ComponentFixture<HxboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HxboxComponent]
    });
    fixture = TestBed.createComponent(HxboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
