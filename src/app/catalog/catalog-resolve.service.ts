import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TshirtService } from '../shared/tshirt.service';
import { Tshirt } from '../shared/tshirt.model';

@Injectable()

export class CatalogResolveService implements Resolve<Tshirt[]> {

	constructor(
		private service: TshirtService
	){}

	resolve(route: ActivatedRouteSnapshot) {
		return this.service.getAll().then(tshirts => tshirts);
	}
}
