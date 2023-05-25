import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNintendoComponent } from './list-nintendo.component';

describe('ListNintendoComponent', () => {
  let component: ListNintendoComponent;
  let fixture: ComponentFixture<ListNintendoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNintendoComponent]
    });
    fixture = TestBed.createComponent(ListNintendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
