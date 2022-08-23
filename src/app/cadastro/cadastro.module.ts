import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CadastroRoutingModule} from './cadastro-routing.module';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "ion2-calendar";
import {CadastroAgendamentoComponent} from "./cadastro-agendamento/cadastro-agendamento.component";


@NgModule({
  declarations: [CadastroAgendamentoComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalendarModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
