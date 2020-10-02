import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  // Redirect root to dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // Page redirects
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'home' } },
  
  // 404 redirect
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'page-not-found', component: PageNotFoundComponent, data: { animation: 'page-not-found' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
