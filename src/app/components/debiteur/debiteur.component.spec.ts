import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebiteurComponent } from './debiteur.component';

describe('DebiteurComponent', () => {
  let component: DebiteurComponent;
  let fixture: ComponentFixture<DebiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
