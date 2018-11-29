import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import { MainComponent } from './main.component';

// import { UsuarioComponent } from './usuario/usuario.component';


const main_routers: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [

    ]
  }
];

@NgModule({
	imports: [
		RouterModule.forChild(main_routers),
		CommonModule,
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class MainRoutingModule { }
