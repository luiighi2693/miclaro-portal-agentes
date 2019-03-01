import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [OrderConfirmationComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule]
})
export class OrderConfirmationModule {}
