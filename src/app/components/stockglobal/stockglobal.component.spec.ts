import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockglobalComponent } from './stockglobal.component';

describe('StockglobalComponent', () => {
  let component: StockglobalComponent;
  let fixture: ComponentFixture<StockglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockglobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
