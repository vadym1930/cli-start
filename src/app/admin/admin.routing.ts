import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageSectionComponent } from './manage-section/manage-section.component';
import { TshirtDetailsComponent } from './tshirt-details/tshirt-details.component';
import { TshirtSelectComponent } from './tshirt-select/tshirt-select.component'; 

const adminRoutes: Routes = [
	{
		path: 'admin',
		children: [
			{
				path: '',
				component: AdminComponent
			},
			{
				path: 't-shirts',
				component: ManageSectionComponent,
				children: [
					{
						path: '',
						component: TshirtSelectComponent
						
					},
					{
						path: ':id',
						component: TshirtDetailsComponent
					}
				] 
			}
		]
	}
]

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);