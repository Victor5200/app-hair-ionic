import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AgendaPage} from './agenda-page.component';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './agenda-routing.module';
import {CalendarModule} from 'ion2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CalendarModule
  ],
  declarations: [AgendaPage]
})
export class AgendaModule {}
