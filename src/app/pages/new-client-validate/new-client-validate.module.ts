import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core';
import { AppRoutingModule } from '../../app-routing.module';
import { NewClientValidateComponent } from './new-client-validate.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, CoreModule, AppRoutingModule, SharedModule],
  declarations: [NewClientValidateComponent]
})
export class NewClientValidateModule {}
