
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { Usuario } from '../../modelos/Usuario.model';
import { AuthService } from '../../servicios/auth.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.pug',
	styleUrls: ['./main.component.styl'],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [   // :enter is alias to 'void => *'
				style({ opacity: 0 }),
				animate(1000, style({ opacity: 1 }))
			]),
			transition(':leave', [   // :leave is alias to '* => void'
				animate(1000, style({ opacity: 0 }))
			])
		])
	]
})
export class MainComponent implements OnInit, OnDestroy {
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	navLinks = [];
	usuario: Usuario;
	subscription: Subscription;

	constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private titleService: Title, private us: AuthService) {
		this.mobileQuery = media.matchMedia('(max-width: 768px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		this.navLinks = [
			{ path: '/', label: 'home', icon: 'airplanemode_active' },
			{ path: '/espacios', label: 'Espacios', icon: 'airplanemode_active' },
			{ path: '/busqueda', label: 'Busqueda', icon: 'airplanemode_active' },
		];
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		this.mobileQuery.removeListener(this._mobileQueryListener);
		this.subscription = this.us.obtenerUsuario().subscribe(user => this.usuario = user);
	}

	salir(){
		this.us.salir();
	}

	ir(x){
        this.router.navigate([ x ])
    }

}
