import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { NewClientValidateComponent } from './pages/new-client-validate/new-client-validate.component';
import { ClasificationCreditComponent } from './pages/clasification-credit/clasification-credit.component';
import { EquipoPlanSvaComponent } from './pages/equipo-plan-sva/equipo-plan-sva.component';
import { ConfirmationPayIncomeComponent } from './pages/confirmation-pay-income/confirmation-pay-income.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'new-client', component: NewClientComponent, pathMatch: 'full' },
  { path: 'validate-client', component: NewClientValidateComponent, pathMatch: 'full' },
  { path: 'clasification-credit', component: ClasificationCreditComponent, pathMatch: 'full' },
  { path: 'equipo-plan-sva', component: EquipoPlanSvaComponent, pathMatch: 'full' },
  { path: 'confirmation-pay-income', component: ConfirmationPayIncomeComponent, pathMatch: 'full' },
  { path: 'order-detail', component: OrderDetailComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
