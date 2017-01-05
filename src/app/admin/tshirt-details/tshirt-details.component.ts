import { Component,  OnInit } from '@angular/core';
import { Tshirt } from '../../shared/tshirt.model';
import { TshirtService } from '../../shared/tshirt.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TshirtDetailsComponent implements OnInit {
	tshirt: Tshirt;
	editName: string;
	editSize: string;
	editMaterial: string;
	editPrice;
	editColor: string;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private service: TshirtService
	){}

	ngOnInit() {
		this.getTshirt()

	}

	getTshirt() {
		this.route.params.forEach(params => {
			let id = params["id"];
			id = +id;
			this.service.getOne(id).then(tshirt => {
				this.tshirt = tshirt;
				this.editName = this.tshirt.name;
				this.editColor = this.tshirt.color;
				this.editSize = this.tshirt.size;
				this.editMaterial = this.tshirt.material;
				this.editPrice = this.tshirt.price;

			});
		});
	}

	cancel() {
		this.router.navigate(['/admin/t-shirts']);
	}

	save() {
		if(this.editName) {
				this.tshirt.name = this.editName;
				this.tshirt.color  = this.editColor;
				this.tshirt.size =  this.editSize;
				this.tshirt.material =  this.editMaterial;
				let price  = +this.editPrice;
				this.tshirt.price =  price ;
				this.cancel();
		}
	}

}