

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MaterialModule } from './../../extras/material.module';
import { ExtrasModule } from './../../extras/extras.module';


import { ContratistaComponent } from './contratista.component';
import { ContratistaRoutingModule } from './contratista-routing.module';
import { ConfirmDelDialogComponent } from './fragments/confirm-del-dialog/confirm-del-dialog.component';



import { HomeModule } from './home/home.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, ReactiveFormsModule,
		ContratistaRoutingModule,
		SlickCarouselModule,
		FroalaEditorModule, FroalaViewModule,
		ExtrasModule,
		MaterialModule,
        HomeModule,
		],
	entryComponents: [
		ConfirmDelDialogComponent,

	],
	declarations: [
		ContratistaComponent,
		ConfirmDelDialogComponent,

	]
})
export class ContratistaModule { }
