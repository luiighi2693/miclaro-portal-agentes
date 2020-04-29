import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { ConfirmationPayIncomeComponent } from './confirmation-pay-income.component';
@NgModule({
  declarations: [ConfirmationPayIncomeComponent],
  imports: [CommonModule, SharedModule]
})
export class ConfirmationPayIncomeModule {}
