import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.scss'],
})
export class FormularioLoginComponent implements OnInit {

  form = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, [Validators.required])
  });

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {}

  navegacao(rota) {
    this.router.navigate([rota]);
  }

  async entrar() {
    if (this.form.invalid) {
      this.form.markAsDirty();
      this.form.markAsTouched();
      return;
    }

    const toast = await this.toastController.create({
      message: 'Logado com sucesso.',
      duration: 2000
    });

    await toast.present();

    this.router.navigate(['/dashboard/tab1']);
  }
}
