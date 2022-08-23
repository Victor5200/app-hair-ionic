import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-agendamento',
  templateUrl: './cadastro-agendamento.component.html',
  styleUrls: ['./cadastro-agendamento.component.scss'],
})
export class CadastroAgendamentoComponent implements OnInit {

  date: string;
  type: 'string';
  numbers = [];

  constructor() { }

  ngOnInit() {
    for (let i = 9; i < 20; i++) {
      this.numbers.push(i);
    }
  }

}
