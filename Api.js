import express from 'express'
import { rutas } from './routes/rutas.js'
import {establecerConexion} from './database/conexion.js'
import cors from 'cors'

export class Api{
    constructor(){
        this.app = express()
        this.conectarBd()
        this.procesarPeticiones()
    }
    levantarServidor(){
        this.app.listen(process.env.PORT, function () {
            console.log('servidor operando con exito')
        })
    }
    procesarPeticiones(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use('/', rutas)
    }
    conectarBd(){
        establecerConexion()
    }
}