import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'servico-page.component.html',
  styleUrls: ['servico-page.component.scss']
})
export class ServicoPage implements OnInit {
  servicos = [{
    id: 1,
    descricao: "cilios",
    valor: 30
  },{
    id: 2,
    descricao: "sobrancelha",
    valor: 150
  },{
    id: 3,
    descricao: "unhas",
    valor: 130
  }];

  constructor() {}

  ngOnInit(): void {

  }

}
