//grab modules and component

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { CatalogResolveService} from './catalog-resolve.service';
import { CatalogDetailResolveService } from './catalog-detail-resolve.service';


//define routes
const catalogRoutes: Routes =
	[
		{
			path: '',
			component: CatalogComponent,
			children:
				[
					{
						path: '',
						component: CatalogListComponent,
						resolve: {
							tshirts: CatalogResolveService
						} 
					},
					{
						path: ':id',
						component: CatalogDetailComponent,
						resolve: {
							tshirt: CatalogDetailResolveService
						} 
					}
				]
		}
	]


//export const with routing
export const catalogRouting: ModuleWithProviders = RouterModule.forChild(catalogRoutes);