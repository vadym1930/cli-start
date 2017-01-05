import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes =
[
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'catalog',
		loadChildren: 'app/catalog/catalog.module#CatalogModule'
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);