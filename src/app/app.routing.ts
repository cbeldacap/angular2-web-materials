import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/Login.component';
import { MainComponent } from './components/main/main.component';

// "router.navigate(['/...'])" will look for these paths
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo:'/login'
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
