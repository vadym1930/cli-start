import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tshirt } from '../../shared/tshirt.model';
import { TshirtService } from '../../shared/tshirt.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {
	tshirt: Tshirt;
	chose: string;


	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private service: TshirtService,
		private router: Router
	){}

	ngOnInit() {
		this.getTshirt();
		this.getBusketAmount();
	}

	getTshirt() {
		this.route.data.forEach((data: {tshirt: Tshirt}) => this.tshirt = data.tshirt);
	}

	getBusketAmount() {
		this.service.getGoods().then(tshirts => {
			let amount = tshirts.length;
			this.service.countBasket(amount);
		});
	}

	goBack() {
		this.location.back();
	}

	toBasket(tshirt: Tshirt) {
		tshirt.inbasket = true;
		this.getBusketAmount();
		this.service.newTshirtAdded(tshirt.name);
		this.router.navigate(['/catalog']);
	}

	
	buyNow() {
		this.chose = '';
		this.chose += 'model: Robo-' + this.tshirt.name;
		this.chose += ', size: ' + this.tshirt.size;

	}
}