// import Injectale, Router, ActivatedRouteSnapshot, Tshirt, TshirtService
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Tshirt } from '../shared/tshirt.model';
import { TshirtService } from '../shared/tshirt.service';

@Injectable()

export class CatalogDetailResolveService implements Resolve<Tshirt> {

	constructor(
		private service: TshirtService,
		private router: Router
	){}

	resolve(route: ActivatedRouteSnapshot) {
		let id = route.params["id"];
		id = +id;
		
		return this.service.getOne(id).then((tshirt) => {
			if(tshirt) {
				return	tshirt;
			}	else {
				this.router.navigate(['/catalog']);
				return false;
			}
		});
	}
}