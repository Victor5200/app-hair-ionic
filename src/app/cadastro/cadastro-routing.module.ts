import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroAgendamentoComponent} from "./cadastro-agendamento/cadastro-agendamento.component";

const routes: Routes = [
  {
    path: '',
    component: CadastroAgendamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
