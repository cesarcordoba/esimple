

import * as express from 'express';
import * as subdomain from 'express-subdomain';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as morgan from 'morgan';


//conexion a la base de datos
import { Conexion } from './http/conexion';
import { Ruteador } from './http/ruteo';
// import { ImagenRouter } from './http/rutas/Imagen';
// import { VideoRouter } from './http/rutas/Video';


import { ProyectoRouter } from './http/proyecto/ruta';
import { ContactoRouter } from './http/contacto/ruta';
import { MultimediaRouter } from './http/multimedia/ruta';
import { PortadaRouter } from './http/portada/ruta';
import { InversionistaRouter } from './http/inversionista/ruta';
import { UsuarioRouter } from './http/usuario/ruta';
import { ContratistaRouter } from './http/contratista/ruta';
import { Proyecto } from './http/proyecto/modelo';
import { Contacto } from './http/contacto/modelo';
import { Multimedia } from './http/multimedia/modelo';
import { Portada } from './http/portada/modelo';
import { Inversionista } from './http/inversionista/modelo';
import { Usuario } from './http/usuario/modelo';
import { Contratista } from './http/contratista/modelo';

export class Server {

    app: express.Application;
    private _url_allow_origin: string[];

    constructor(private port: number, modo, urlAllowOrigin?: string[]) {
        console.log(modo)
        this._url_allow_origin = urlAllowOrigin;
        this.app = express();
        this.config();
        this.apiRutas();

    }

    static init(port: number, modo, urlAllowOrigin?: string[]): Server {
        return new Server(port, modo, urlAllowOrigin);
    }

    iniciarServidor(callback?: Function) {
        this.app.listen(this.port, callback);
    }

    private config() {

        let conexion = new Conexion();
        conexion.addModels([
        
            Proyecto,
            Contacto,
            Multimedia,
            Portada,
            Inversionista,
            Usuario,
            Contratista,
        ])
        conexion.sync();

        this.app.use((req, res, next) => {
            let origin = req.headers.origin;

            if(origin && this._url_allow_origin.indexOf(origin.toString()) > -1){
                 res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            );
            next();
        })

        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cookieParser());

        this.app.use(session({ secret: '01f4845/564564/6@@fas588--[[}++', resave: true, saveUninitialized: true }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());

        morgan('combined', { skip: function (req, res) { return res.statusCode < 400 } });
    }

    private apiRutas() {
        let rutas
        =Ruteador.init([
            new ProyectoRouter().rutas(),
            new ContactoRouter().rutas(),
            new MultimediaRouter().rutas(),
            new PortadaRouter().rutas(),
            new InversionistaRouter().rutas(),
            new UsuarioRouter().rutas(),
            new ContratistaRouter().rutas(),
            new UsuarioRouter().rutas(),
            // new ImagenRouter().rutas(),
            // new VideoRouter().rutas()
        ])

        this.app.use(subdomain('api', rutas.route))
    }
}