import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQRproductComponent } from './add-qrproduct.component';

describe('AddQRproductComponent', () => {
  let component: AddQRproductComponent;
  let fixture: ComponentFixture<AddQRproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQRproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQRproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
