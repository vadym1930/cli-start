import { Component, OnInit, Input } from '@angular/core';

export class Customer {
	name: string;
	phone: string;
}

@Component({
  selector: 'app-catalog-modal',
  templateUrl: './catalog-modal.component.html',
  styleUrls: ['./catalog-modal.component.css']
})

export class CatalogModalComponent implements OnInit {
	@Input()
	chose: string;
	

	submitted: boolean;
	destroy: boolean = false;
	customer: Customer;

	ngOnInit() {
		this.customer = {
			name: '',
			phone: ''
		}
	}

	onSubmit() {
		console.log(`name: ${this.customer.name}, phone: ${this.customer.phone}`);
		this.submitted = true;
		setTimeout(()=> {
			this.submitted = false;
			this.customer = {
				name: '',
				phone: ''
			};
			this.destroyForm();
		}, 3000);
	}

	destroyForm() {
		this.destroy = true;
		setTimeout(()=> this.destroy = false, 0 );
	}



}