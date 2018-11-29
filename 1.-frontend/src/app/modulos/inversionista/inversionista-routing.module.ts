import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import { InversionistaComponent } from './inversionista.component';

// import { UsuarioComponent } from './usuario/usuario.component';


const inversionista_routers: Routes = [
  {
    path: '',
    component: InversionistaComponent,
    children: [

    ]
  }
];

@NgModule({
	imports: [
		RouterModule.forChild(inversionista_routers),
		CommonModule,
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class InversionistaRoutingModule { }
