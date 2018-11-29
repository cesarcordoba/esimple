
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../../../servicios';
@Component({
  selector: 'listaInversionistas',
  templateUrl: './listaInversionistas.component.pug',
  styleUrls: ['./listaInversionistas.component.styl']
})
export class ListainversionistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    usuarios = {
        items : []
    }
    filtro : any;

    constructor() {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  10 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    UsuarioService.paginacion(this.filtro)
    .then(response => this.usuarios = response)

  }

  ngOnInit() {



  }
}