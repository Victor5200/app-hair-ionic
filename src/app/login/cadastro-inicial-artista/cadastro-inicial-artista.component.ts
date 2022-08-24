import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-cadastro-inicial-artista',
  templateUrl: './cadastro-inicial-artista.component.html',
  styleUrls: ['./cadastro-inicial-artista.component.scss'],
})
export class CadastroInicialArtistaComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null, [Validators.required]),
    genero: new FormControl('masculino', [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    nascimento: new FormControl(null, [Validators.required]),
    vinculo: new FormControl('autonomo', [Validators.required])
  });

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {}

  async entrar() {
    if (this.form.invalid) {
      this.form.markAsDirty();
      this.form.markAsTouched();
      return;
    }

    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso.',
      duration: 2000
    });

    await toast.present();

    this.router.navigate(['/']);
  }
}
