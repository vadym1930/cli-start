import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketComponent } from './basket.component';

const basketRoutes: Routes = [
	{
		path: 'basket',
		component: BasketComponent
	}

]

export const basketRouting: ModuleWithProviders = RouterModule.forChild(basketRoutes);