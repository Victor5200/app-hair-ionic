import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'cliente-page.component.html',
  styleUrls: ['cliente-page.component.scss']
})
export class ClientePage implements OnInit {

  numbers = [];

  constructor() {}

  ngOnInit(): void {
   /* for (let i = 9; i < 20; i++) {
      this.numbers.push(i);
    }*/
  }



}
