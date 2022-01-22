import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFactureComponent } from './invoice-facture.component';

describe('InvoiceFactureComponent', () => {
  let component: InvoiceFactureComponent;
  let fixture: ComponentFixture<InvoiceFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
