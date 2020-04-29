import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail.component';

import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [OrderDetailComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule]
})
export class OrderDetailModule {}
