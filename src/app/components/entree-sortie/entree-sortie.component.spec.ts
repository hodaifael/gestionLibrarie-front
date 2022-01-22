import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeSortieComponent } from './entree-sortie.component';

describe('EntreeSortieComponent', () => {
  let component: EntreeSortieComponent;
  let fixture: ComponentFixture<EntreeSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreeSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
