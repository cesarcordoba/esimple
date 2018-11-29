

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';


import { MaterialModule } from '../../extras/material.module';
import { ExtrasModule } from '../../extras/extras.module';


import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { HomeModule } from './home/home.module';

@NgModule({
	imports: [
		CommonModule,
		MainRoutingModule,
		SlickCarouselModule,
		MaterialModule,
		ExtrasModule,
		FormsModule,
		ReactiveFormsModule,
		
        HomeModule,
	],
	declarations: [
		MainComponent,
	]
})
export class MainModule { }
