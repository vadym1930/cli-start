import { Component, OnInit } from '@angular/core';
import { Tshirt } from '../../shared/tshirt.model';
import { ActivatedRoute } from '@angular/router';

import { TshirtService } from '../../shared/tshirt.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
	tshirts: Tshirt[];
	chose: string;

	constructor(
		private route: ActivatedRoute,
		
		private service: TshirtService
	){}

	ngOnInit() {
		this.getTshirts();
		this.getBasketAmount();
	}

	getTshirts() {
		this.route.data.forEach((data: {tshirts: Tshirt[]}) => this.tshirts = data.tshirts);
	}

	toBasket(tshirt: Tshirt) {
		tshirt.inbasket = true;
		this.getBasketAmount();
		this.service.newTshirtAdded(tshirt.name);
	}

	getBasketAmount() {
		this.service.getGoods().then(tshirts => {
			let amount = tshirts.length;
			this.service.countBasket(amount);
		});
	}

	buyNow(tshirt) {
	
		this.chose = '';
		this.chose += 'model: Robo-' + tshirt.name;
		this.chose += ', size: ' + tshirt.size;
	}
}
