import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngressoComponent } from './ingresso/ingresso.component';

const routes: Routes = [
  { path: '', component: IngressoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscricaoRoutingModule { }
