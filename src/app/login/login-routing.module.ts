import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormularioLoginComponent} from './formulario-login/formulario-login.component';
import {RecuperarSenhaComponent} from './recuperar-senha/recuperar-senha.component';
import {CadastroInicialArtistaComponent} from './cadastro-inicial-artista/cadastro-inicial-artista.component';


const routes: Routes = [
  {
    path: '',
    component: FormularioLoginComponent,
  },
  {
    path: 'recuperar',
    component: RecuperarSenhaComponent,
  },
  {
    path: 'criar',
    component: CadastroInicialArtistaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
