import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceCmdComponent } from './invoice-cmd.component';

describe('InvoiceCmdComponent', () => {
  let component: InvoiceCmdComponent;
  let fixture: ComponentFixture<InvoiceCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
