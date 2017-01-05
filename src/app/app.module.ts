import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//======my modules
import { AdminModule } from './admin/admin.module';
import { BasketModule } from './basket/basket.module';
//======my modules

import { AppComponent } from './app.component';
import { appRouting } from './app.routing'; 


import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ BrowserModule, appRouting, AdminModule, BasketModule ],
  declarations:
  [ 
  	AppComponent,
  	HomeComponent,
  	NotFoundComponent,
  	ContactComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}