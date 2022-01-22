import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeFournissComponent } from './commande-fourniss.component';

describe('CommandeFournissComponent', () => {
  let component: CommandeFournissComponent;
  let fixture: ComponentFixture<CommandeFournissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeFournissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeFournissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
