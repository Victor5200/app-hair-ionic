import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'servico-page.component.html',
  styleUrls: ['servico-page.component.scss']
})
export class ServicoPage implements OnInit {
  numbers = [];

  constructor() {}

  ngOnInit(): void {
    /*for (let i = 9; i < 20; i++) {
      this.numbers.push(i);
    }*/
  }

}
