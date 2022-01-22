import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRproductComponent } from './qrproduct.component';

describe('QRproductComponent', () => {
  let component: QRproductComponent;
  let fixture: ComponentFixture<QRproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
