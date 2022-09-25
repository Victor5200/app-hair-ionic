import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./acoes/acoes.module').then(m => m.AcoesModule)
      },

      {
        path: 'tab4',
        loadChildren: () => import('./sobre-nos/sobre-nos-routing.module').then(m => m.SobreNosRoutingModule)
      },

      {
        path: 'tab5',
        loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule)
      },
      {
        path: '',
        redirectTo: 'dashboard/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
