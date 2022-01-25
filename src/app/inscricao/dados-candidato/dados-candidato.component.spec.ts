import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCandidatoComponent } from './dados-candidato.component';

describe('DadosCandidatoComponent', () => {
  let component: DadosCandidatoComponent;
  let fixture: ComponentFixture<DadosCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
