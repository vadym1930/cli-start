import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';


const appRoutes = [
  {
    path: 'hello',
    component: HelloComponent
  }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);