import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorNaoEncontradorComponent } from './diretor-nao-encontrador.component';

describe('DiretorNaoEncontradorComponent', () => {
  let component: DiretorNaoEncontradorComponent;
  let fixture: ComponentFixture<DiretorNaoEncontradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretorNaoEncontradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretorNaoEncontradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
