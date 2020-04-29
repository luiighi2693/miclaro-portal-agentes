import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core';
import { AppRoutingModule } from '../../app-routing.module';
import { NewClientComponent } from './new-client.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, CoreModule, AppRoutingModule, SharedModule],
  declarations: [NewClientComponent]
})
export class NewClientModule {}
