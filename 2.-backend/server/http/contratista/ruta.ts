
import { Router } from "express";
import { ContratistaController } from "./controlador";

export class ContratistaRouter {
    private _rutas = Router();
    private controlador: ContratistaController;

    constructor() {
        this.controlador = new ContratistaController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/contratista')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/contratista/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/contratista/paginacion')
            .post(this.controlador.paginacion);


        }

    rutas() {
        return this._rutas;
    }
}
