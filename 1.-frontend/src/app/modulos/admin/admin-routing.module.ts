import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


/* Importamos los componentes que se usarán en las rutas
 */
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../../guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilproyectosComponent } from './perfilproyectos/perfilproyectos.component';

const admin_routers: Routes = [
	{
		path: '',
		component: AdminComponent,
		// canActivate: [AuthGuard],
		// canActivateChild: [AuthGuard],
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'proyectos',
				component: ProyectosComponent
			},
			{
				path: 'proyectos/:id',
				component: PerfilproyectosComponent
			},
			{
				path: 'usuarios',
				component: UsuariosComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(admin_routers),
		CommonModule
	],
	exports: [
		RouterModule
	],
})
export class AdminRoutingModule { }
