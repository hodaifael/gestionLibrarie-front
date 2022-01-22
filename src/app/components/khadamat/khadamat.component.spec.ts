import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadamatComponent } from './khadamat.component';

describe('KhadamatComponent', () => {
  let component: KhadamatComponent;
  let fixture: ComponentFixture<KhadamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhadamatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhadamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
