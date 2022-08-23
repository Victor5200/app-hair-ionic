import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro-inicial-artista',
  templateUrl: './cadastro-inicial-artista.component.html',
  styleUrls: ['./cadastro-inicial-artista.component.scss'],
})
export class CadastroInicialArtistaComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null, [Validators.required]),
    genero: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    nascimento: new FormControl(null, [Validators.required]),
    vinculo: new FormControl(null, [Validators.required])
  });

  constructor() { }

  ngOnInit() {}

  entrar() {

  }
}
