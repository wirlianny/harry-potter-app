import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasDetalheComponent } from './aulas-detalhe.component';

describe('AulasDetalheComponent', () => {
  let component: AulasDetalheComponent;
  let fixture: ComponentFixture<AulasDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulasDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AulasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
