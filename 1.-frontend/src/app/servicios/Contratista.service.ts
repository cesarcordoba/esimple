
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Contratista } from '../modelos/Contratista.model'
import * as axios from 'axios'

const url = APILOCAL.url

@Injectable()
export class ContratistaService {

    public static crear = (peticion) => axios.default.post( url + '/data/contratista', peticion).then(response =>  new Contratista( response.data ))
    public static obtener = () => axios.default.get( url + '/data/contratista').then(response => response.data.map(n => new Contratista( n )))
    public static one = (id) => axios.default.get( url + '/data/contratista/' + id).then(response =>  new Contratista( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/contratista/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/contratista/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/contratista/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Contratista( n ))}))


    //- Finalizo
}