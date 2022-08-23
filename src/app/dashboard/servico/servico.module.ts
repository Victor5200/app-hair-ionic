import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicoPage } from './servico-page.component';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ServicoPageRoutingModule } from './servico-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ServicoPage }]),
    ServicoPageRoutingModule,
  ],
  declarations: [ServicoPage]
})
export class ServicoModule {}
