import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretoresDetalheComponent } from './diretores-detalhe.component';

describe('DiretoresDetalheComponent', () => {
  let component: DiretoresDetalheComponent;
  let fixture: ComponentFixture<DiretoresDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretoresDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretoresDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
