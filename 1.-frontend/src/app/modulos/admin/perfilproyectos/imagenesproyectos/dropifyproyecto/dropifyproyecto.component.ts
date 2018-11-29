
import { Component, OnInit, Input} from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmDelDialogComponent } from '../../../fragments/confirm-del-dialog/confirm-del-dialog.component';

import {AWSService,MultimediaService, ProyectoService } from '../../../../../servicios';

interface Files {
	tamano: number
	archivo: File
}
@Component({
  selector: 'dropifyproyecto',
  templateUrl: './dropifyproyecto.component.pug',
  styleUrls: ['./dropifyproyecto.component.styl'],
providers: [AWSService, Ng2ImgMaxService]
})
export class DropifyproyectoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    @Input() id: number;


    @Input() multimedias: any[] = [];
    file: File
	files: Files[] = [];

	carga = false;

    constructor(
		private _aws: AWSService,
		private _n2m: Ng2ImgMaxService,
		public snack: MatSnackBar,
		public _dialog: MatDialog
    ) {}

    guardar() {
        for (let i = 0; i <= 4; i++) {
            switch (i) {
                case 0:
                    this.rezise(i, 400);
                    break;
                case 1:
                    this.rezise(i, 200);
                    break;
                case 2:
                    this.rezise(i, 100);
                    break
                case 3:
                    this.rezise(i, 50);
                    break
            }
        }
    }

    private rezise(index, width) {
        this._n2m.resizeImage(this.file, width, width).subscribe(result => {
            this.files.push({
                tamano: width,
                archivo: new File([result], index + '-' + result.name)
            })
            if (this.files.length == 4) {
                this.subir();
            }
        }, error => {
            console.log('😢 Oh no!', error)
        })
    }
	private subir() {
		this.files.forEach(file => {
			this._aws.subirArchivo(file.archivo, 'bull-imagenes', 'esimple-imagenes/').subscribe(archivo => {
				if (archivo == true) {
					this.carga = true;
				} else {
					if (archivo == false) {
						this.carga = false;
						this.snack.open('Error al subir algunos de los archivos', '', {
							duration: 2000,
						});
					}
					else {
						MultimediaService.crear({
							link: archivo[0],
							key: archivo[1],
							tamano: file.tamano.toString() + 'x' + file.tamano.toString()
						})
						.then(portadota => ProyectoService.ligarmultimedia(this.id, portadota.id)
						.then(portada => this.multimedias.push(portadota)))
						.then(algomas => this.carga = false)
					}
				}
			})
		})
	}    

    ngOnInit() {
        this.multimedias ? null : this.multimedias = [];
    }

	borrar() {
		this._dialog.open(ConfirmDelDialogComponent, {
			disableClose: true,
		}).afterClosed().subscribe(result => {
			if (result) {
				this.empezandoBorrado()
			}
		});
    }
    
	private empezandoBorrado() {
		this.multimedias.forEach((portada, index) => {
			this._aws.borrarArchivo(portada.key, 'bull-imagenes', 'esimple-imagenes/').subscribe(eliminado => {
				this.carga = true;
				if (eliminado && index == 3) {
					this.carga = false;
					this.multimedias = [];
				}

				if (eliminado == true) {
					MultimediaService.eliminar(portada.id)
				} else {
					this.carga == false
					this.snack.open('Error al eliminar algunos de los archivos', '', {
						duration: 2000,
					});
				}
			})
		})
	}    
}