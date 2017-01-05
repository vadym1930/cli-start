import { Component, OnInit } from '@angular/core';
import { TshirtService } from '../shared/tshirt.service';
import { Tshirt } from '../shared/tshirt.model';

export class Customer {
	name: string;
	phone: string;
	address: string;
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
	tshirts: Tshirt[];
	total: number;
	customer: Customer;
	submitted: boolean = false;

	constructor(private service: TshirtService){}

	ngOnInit() {
		this.customer = {
			name: '',
			phone: '',
			address: ''
		}
		this.getGoods();
	}

	getGoods() {
		this.service.getGoods().then(tshirts => {
			this.tshirts = tshirts;
			this.count();
		});
	}

	count() {
		this.total = 0;
		this.tshirts.forEach(tshirt => {
			this.total += tshirt.price;
			
		});
		
	}

	remove(tshirt: Tshirt) {
		let index = this.tshirts.indexOf(tshirt);
		this.tshirts.splice(index, 1);
		tshirt.inbasket = false;
		this.count();
	}

	onSubmit() {
		console.log(this.customer, this.tshirts);
		this.submitted = true;
		this.tshirts.forEach(tshirt => tshirt.inbasket = false);
		this.tshirts = [];
		this.count();

	}





}