import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddniveauComponent } from './addniveau.component';

describe('AddniveauComponent', () => {
  let component: AddniveauComponent;
  let fixture: ComponentFixture<AddniveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddniveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
