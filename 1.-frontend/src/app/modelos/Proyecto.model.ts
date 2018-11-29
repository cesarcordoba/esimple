
import { ProyectoService } from '../servicios/Proyecto.service'

export class Proyecto {
    id: number;
    nombre:string;


    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}