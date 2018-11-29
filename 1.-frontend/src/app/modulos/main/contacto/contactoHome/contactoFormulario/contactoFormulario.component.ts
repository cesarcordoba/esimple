
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { ContactoService } from '../../../../../servicios';
@Component({
  selector: 'contactoFormulario',
  templateUrl: './contactoFormulario.component.pug',
  styleUrls: ['./contactoFormulario.component.styl']
})
export class ContactoformularioComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() contacto
    formulario: FormGroup;



    contactos: any

    constructor(private fb: FormBuilder) {

        
        
  }

    ngOnInit() {

    }


    aceptar(){

        console.log(this.contacto)

        ContactoService.editar(this.contacto)

    }


}