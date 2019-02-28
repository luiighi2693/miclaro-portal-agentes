import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewClientComponent } from './pages/new-client/new-client.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'new-client', component: NewClientComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
