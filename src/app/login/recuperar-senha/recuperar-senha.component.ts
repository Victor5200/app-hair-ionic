import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss'],
})
export class RecuperarSenhaComponent implements OnInit {

  form = new FormGroup({
    login: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {}

  async entrar() {
    if (this.form.invalid) {
      this.form.markAsDirty();
      this.form.markAsTouched();
      return;
    }

    this.router.navigate(['/']);
  }

}
