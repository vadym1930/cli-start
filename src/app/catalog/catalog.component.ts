import { Component, OnInit, OnDestroy } from '@angular/core';
import { TshirtService } from '../shared/tshirt.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	subscriptionName: Subscription;
	quantity: number;
	name: string;

	constructor(private service: TshirtService) {}

	ngOnInit() {
		
		this.subscription = this.service.basketAmount$.subscribe(amount => {
			this.quantity = amount

			
		});
		this.subscriptionName = this.service.tshirtName$.subscribe(name => 
		{
			this.name = `Last adding to cart — model: Robo-${name}`;
			setTimeout(()=>{
				this.name = '';
			}, 5000);
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
		this.subscriptionName.unsubscribe();
	}
}