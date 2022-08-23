import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {FormularioLoginComponent} from './formulario-login/formulario-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecuperarSenhaComponent} from './recuperar-senha/recuperar-senha.component';
import {IonicModule} from '@ionic/angular';
import {CadastroInicialArtistaComponent} from './cadastro-inicial-artista/cadastro-inicial-artista.component';


@NgModule({
  declarations: [FormularioLoginComponent, RecuperarSenhaComponent, CadastroInicialArtistaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    IonicModule
  ]
})
export class LoginModule { }
