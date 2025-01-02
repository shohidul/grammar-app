import { Routes } from '@angular/router';
import { pinGuard } from './guards/pin.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [pinGuard],
    children: [
      {
        path: '',
        loadComponent: () => 
          import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'settings',
        loadComponent: () => 
          import('./pages/settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'tutorial',
        loadComponent: () => 
          import('./pages/tutorial/tutorial.component').then(m => m.TutorialComponent)
      },
      {
        path: 'about',
        loadComponent: () => 
          import('./pages/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: 'content/:topic',
        loadComponent: () =>
          import('./pages/content/content.component').then(m => m.ContentComponent)
      }
    ]
  },
  {
    path: 'pin',
    loadComponent: () => 
      import('./pages/pin/pin.component').then(m => m.PinComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];