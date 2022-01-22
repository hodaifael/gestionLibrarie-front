import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBenificiereComponent } from './detail-benificiere.component';

describe('DetailBenificiereComponent', () => {
  let component: DetailBenificiereComponent;
  let fixture: ComponentFixture<DetailBenificiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBenificiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBenificiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
