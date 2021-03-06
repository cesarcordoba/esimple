
const errorHandler = require('../error');
const _ = require('lodash');

import { Usuario } from "./modelo";
import { Response, Request, NextFunction } from "express-serve-static-core";

export class UsuarioController {

    //* null
    crear = (req: Request, res: Response, next: NextFunction) =>
        Usuario.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearUsuario'))

    //* null
    buscar = (req: Request, res: Response, next: NextFunction) => req.params.id ?
        Usuario.findById(req.params.id)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarUsuario'))
        :
        Usuario.findAll()
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'buscarUsuario'))
    //* null
    actualizar = (req: Request, res: Response, next: NextFunction) =>
        Usuario.update(req.body,{ where: { id: req.params.id}})
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarUsuario'))

    //* null
    eliminar = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarUsuario'))

    //* null
    paginacion = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findAndCountAll({
            // order : ['nombre']
        	}).then(response =>
                res.status(200).jsonp(
                    new Object({
                        items : _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                        paginas : Math.round(response.count / req.body.limite)
                    })))
            .catch(err => errorHandler(err, 'paginacionUsuario'))


    //* 5
    inversionistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(item => item.$get('Inversionistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'UsuarioInversionistas'))

    //* 5
    ligarinversionistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$add('Inversionistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioInversionistas'))

    //* 5
    desligarinversionistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Inversionistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioInversionistas'))

                
    //* 8
    contratistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'UsuarioContratistas'))

    //* 8
    ligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$add('Contratistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioContratistas'))

    //* 8
    desligarcontratistas = (req: Request, res: Response, next: NextFunction) =>
        Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Contratistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioContratistas'))

                
}