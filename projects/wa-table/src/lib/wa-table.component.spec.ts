import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaTableComponent } from './wa-table.component';

describe('WaTableComponent', () => {
  let component: WaTableComponent;
  let fixture: ComponentFixture<WaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
