import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core';
import { AppRoutingModule } from '../../app-routing.module';
import { EquipoPlanSvaComponent } from './equipo-plan-sva.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, CoreModule, AppRoutingModule, SharedModule],
  declarations: [EquipoPlanSvaComponent]
})
export class EquipoPlanSvaModule {}
