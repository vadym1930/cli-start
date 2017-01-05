import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRouting } from './admin.routing';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { ManageSectionComponent } from './manage-section/manage-section.component';
import { TshirtDetailsComponent } from './tshirt-details/tshirt-details.component';
import { TshirtService } from '../shared/tshirt.service';
import { TshirtSelectComponent } from './tshirt-select/tshirt-select.component'; 

@NgModule({
	imports: [
		CommonModule,
		adminRouting,
		FormsModule
	],
	declarations: [
		AdminComponent,
		ManageSectionComponent,
		TshirtDetailsComponent,
		TshirtSelectComponent
	],
	providers: [
		TshirtService
	]
})

export class AdminModule {}