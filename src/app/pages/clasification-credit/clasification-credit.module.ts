import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core';
import { AppRoutingModule } from '../../app-routing.module';
import { ClasificationCreditComponent } from './clasification-credit.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, CoreModule, AppRoutingModule, SharedModule],
  declarations: [ClasificationCreditComponent]
})
export class ClasificationCreditModule {}
