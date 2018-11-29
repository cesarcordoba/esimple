
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metricasInversionista',
  templateUrl: './metricasInversionista.component.pug',
  styleUrls: ['./metricasInversionista.component.styl']
})
export class MetricasinversionistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}