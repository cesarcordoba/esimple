
import { Component, OnInit } from '@angular/core';

import { MultimediaService } from '../../../../../servicios';
@Component({
  selector: 'gridimgproyectos',
  templateUrl: './gridimgproyectos.component.pug',
  styleUrls: ['./gridimgproyectos.component.styl']
})
export class GridimgproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    multimedias = {
        items : []
    }
    filtro : any;
    columnas = 4
    height = '200px'
    colspan = 1
    rowspan = 1

    constructor() {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    MultimediaService.paginacion(this.filtro)
    .then(response => this.multimedias = response)

  }

  ngOnInit() {



  }
}