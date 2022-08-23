import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'agenda-page.component.html',
  styleUrls: ['agenda-page.component.scss']
})
export class AgendaPage {
  date: string;
  type: 'string';
  items = [0, 1, 2];

  constructor() {}

}
