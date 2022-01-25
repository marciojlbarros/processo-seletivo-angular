import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscricaoRoutingModule } from './inscricao-routing.module';
import { IngressoComponent } from './ingresso/ingresso.component';
import { DadosCandidatoComponent } from './dados-candidato/dados-candidato.component';
import { AtualizaCadastroComponent } from './atualiza-cadastro/atualiza-cadastro.component';


@NgModule({
  declarations: [
    IngressoComponent,
    DadosCandidatoComponent,
    AtualizaCadastroComponent
  ],
  imports: [
    CommonModule,
    InscricaoRoutingModule
  ]
})
export class InscricaoModule { }
