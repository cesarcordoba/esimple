import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import { ContratistaComponent } from './contratista.component';

// import { UsuarioComponent } from './usuario/usuario.component';


const contratista_routers: Routes = [
  {
    path: '',
    component: ContratistaComponent,
    children: [

    ]
  }
];

@NgModule({
	imports: [
		RouterModule.forChild(contratista_routers),
		CommonModule,
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class ContratistaRoutingModule { }
