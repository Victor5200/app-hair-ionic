import {Component} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'area-logada-page.component.html',
  styleUrls: ['area-logada-page.component.scss']
})
export class AreaLogadaPage {

  menus = [{
    icon: 'person',
    name: 'Meus Dados',
  }, {
    icon: 'home',
    name: 'Meus Endereços',
  },
  {
    icon: 'home',
    name: 'Meus Dados',
  },
  {
    icon: 'home',
    name: 'Meus Dados',
  },
  {
    icon: 'home',
    name: 'Meus Dados',
  }];

  constructor() {
  }

}
