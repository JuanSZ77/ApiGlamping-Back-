import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReservas{

    constructor(){}
    async registrarReserva(peticion, respuesta){
        try{   
            let servicioReserva = new ServicioReserva()
            //1. Esculcar los datos que quieren usar para el registro
            let datosReservaRegistrar = peticion.body
            //2. Validar los datos
            //3. Intentar guardar los datos
            await servicioReserva.registrarReserva(datosReservaRegistrar)
            //4. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos": datosReservaRegistrar
            }) 

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado" + error
            })
        }
    }
    async buscarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            // 1. Intentar buscar los datos en BD
            // 2. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad",
                "datos": await servicioReserva.buscarReservas()
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de busquedad" + error
            })
        }
    }
    async buscarReservaPorId(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            // 1.Esculcar los parametros de la peticion
            let idReservaBuscar = peticion.params.id
            // 2.Validar el dato
            // 3.Intento buscar el dato en BD
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad",
                "datos": await servicioReserva.buscarReserva(idReservaBuscar)
            })

        }catch(error){
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad" + error
            })
        }
    }
    async modificarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            // 1.Traigo el id a editar de la peticion
            let idReservaModificar = peticion.params.id
            let datosReservaModificar = peticion.body
            // 2.Validar los datos
            // 3.Buscar y modificar en BD
            await servicioReserva.modificarReserva(idReservaModificar, datosReservaModificar)
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos": datosReservaModificar
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion" + error
            })
        }
    }
    async borrarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            // 1.Traigo el id a eliminar
            let idReservaBorrar = peticion.params.id
            // 2.Validar datos
            // 3.Intento borrar la habitacion en BD
            await servicioReserva.borrarReserva(idReservaBorrar)
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de borrado"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de borrado"
            })
        }
    }
}