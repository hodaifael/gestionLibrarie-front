import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DupliqueProduitComponent } from './duplique-produit.component';

describe('DupliqueProduitComponent', () => {
  let component: DupliqueProduitComponent;
  let fixture: ComponentFixture<DupliqueProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DupliqueProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DupliqueProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
