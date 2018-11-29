
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seccionNosotrosProyectos',
  templateUrl: './seccionNosotrosProyectos.component.pug',
  styleUrls: ['./seccionNosotrosProyectos.component.styl']
})
export class SeccionnosotrosproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}