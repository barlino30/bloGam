import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayComponent } from './list-play.component';

describe('ListPlayComponent', () => {
  let component: ListPlayComponent;
  let fixture: ComponentFixture<ListPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPlayComponent]
    });
    fixture = TestBed.createComponent(ListPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
