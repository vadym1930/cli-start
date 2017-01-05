import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { basketRouting } from './basket.routing';

import { BasketComponent } from './basket.component';
import { TshirtService } from '../shared/tshirt.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		basketRouting
	],
	declarations: [
		BasketComponent
	],
	providers: [
		TshirtService
	]

})

export class BasketModule {}