import { Component, OnInit } from '@angular/core';
import { Tshirt } from '../../shared/tshirt.model';
import { TshirtService } from '../../shared/tshirt.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.css']
})
export class ManageSectionComponent implements OnInit {
	tshirts: Tshirt[];
	

	constructor(private service: TshirtService, private router: Router){}

	ngOnInit() {
		this.getTshirts();
	
	}

	getTshirts() {
		this.service.getAll().then((tshirts: Tshirt[]) => this.tshirts = tshirts);
	}



}