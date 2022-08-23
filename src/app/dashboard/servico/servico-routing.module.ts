import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPage } from './servico-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPageRoutingModule {}
