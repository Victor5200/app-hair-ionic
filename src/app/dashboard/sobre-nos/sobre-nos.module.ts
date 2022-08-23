import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

import {SobreNosRoutingModule} from './sobre-nos-routing.module';
import {SobreNosComponent} from './sobre-nos.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SobreNosRoutingModule
  ],
  declarations: [SobreNosComponent]
})
export class SobreNosModule {}
