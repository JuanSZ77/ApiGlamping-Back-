//Se esta importando el paquete
// const express = require('express')



// Estoy atendiendo una peticion y respondiendo
// cada endpoint es un slash
// cada servicio es un endpoint
//la url es a donde va y el endpoint lo que va a hacer


//////////////////////////////////////////////

import { Api } from "./Api.js";
import 'dotenv/config'

// console.log(process.env)

// para usar una clase debo crear un objeto
// para usar una clase se debe crear una instancia
// toddo objeto es una variable

let servidor=new Api()

// levantar o despertar servidor

servidor.levantarServidor()


