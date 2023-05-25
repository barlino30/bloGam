import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListXboxComponent } from './list-xbox.component';

describe('ListXboxComponent', () => {
  let component: ListXboxComponent;
  let fixture: ComponentFixture<ListXboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListXboxComponent]
    });
    fixture = TestBed.createComponent(ListXboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
