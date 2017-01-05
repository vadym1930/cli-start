import { Injectable } from '@angular/core';
import { Tshirt } from './tshirt.model';
import { tshirts } from './tshirts.data';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class TshirtService {

	//shared functionality
	//create basket amount source
	private basketAmountSource = new Subject<number>();
	//create basket amount stream
	basketAmount$ = this.basketAmountSource.asObservable();
	/**
	 * create function which gives new value and returns in the stream
	 * @param {number} amount show how many goods in the busket
	 */
	countBasket(amount: number) {
		this.basketAmountSource.next(amount);
	}

	//create adding success message with shared service
	//create tshirt name source
	private tshirtNameSource = new Subject<string>();
	//create tshirt name source
	tshirtName$ = this.tshirtNameSource.asObservable();

	newTshirtAdded(tshirtname: string) {
		this.tshirtNameSource.next(tshirtname);
	}

	/**
	 * get all tshirts from our file: dummy data
	 * @return {Promise<Tshirt[]>} gives us posibility use then in the component
	 */
	getAll(): Promise<Tshirt[]> {
		return Promise.resolve(tshirts);
	}

	/**
	 * get one tshirt using getAll function, find helps us return current tshirt depends on id param
	 * @param  {number}          id tshirt id
	 * @return {Promise<Tshirt>}    promise of Tshirt object
	 */
	getOne(id: number): Promise<Tshirt> {
		return this.getAll().then(tshirts => tshirts.find(tshirt => tshirt.id === id));
	}

	/**
	 * get all goods from the busket, depends on boolean value of each tshirt
	 * @return {Promise<Tshirt[]>} promise of array of objects Tshirt
	 */
	getGoods(): Promise<Tshirt[]> {
		return this.getAll().then(tshirts => {
			return tshirts.filter(tshirt => tshirt.inbasket === true);
		});
	}

}//ending of the class
