import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfxboxComponent } from './hfxbox.component';

describe('HfxboxComponent', () => {
  let component: HfxboxComponent;
  let fixture: ComponentFixture<HfxboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HfxboxComponent]
    });
    fixture = TestBed.createComponent(HfxboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
