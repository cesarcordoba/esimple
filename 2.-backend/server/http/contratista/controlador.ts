
const errorHandler = require('../error');
const _ = require('lodash');

import { Contratista } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class ContratistaController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Contratista.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearContratista'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Contratista.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarContratista'))
        :
        Contratista.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarContratista'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Contratista.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarContratista'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarContratista'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Contratista.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionContratista'))


}