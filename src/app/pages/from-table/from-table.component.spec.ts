import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromTableComponent } from './from-table.component';

describe('FromTableComponent', () => {
  let component: FromTableComponent;
  let fixture: ComponentFixture<FromTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
