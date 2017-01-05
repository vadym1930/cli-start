import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catalogRouting } from './catalog.routing';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { TshirtService } from '../shared/tshirt.service';
import { CatalogResolveService } from './catalog-resolve.service';
import { CatalogDetailResolveService } from './catalog-detail-resolve.service';
import { CatalogModalComponent } from './catalog-modal/catalog-modal.component';

@NgModule({
	imports:
		[
			CommonModule,
			catalogRouting,
			FormsModule
		],
	declarations: 
		[
			CatalogComponent,
			CatalogListComponent,
			CatalogDetailComponent,
			CatalogModalComponent
		],
	providers:
		[
			TshirtService,
			CatalogResolveService,
			CatalogDetailResolveService
		]

})

export class CatalogModule {}
