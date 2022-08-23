import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientePage } from './cliente-page.component';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ClientePageRoutingModule } from './cliente-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ClientePageRoutingModule
  ],
  declarations: [ClientePage]
})
export class ClienteModule {}
