import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaLogadaPage } from './area-logada-page.component';

const routes: Routes = [
  {
    path: '',
    component: AreaLogadaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPageRoutingModule {}
