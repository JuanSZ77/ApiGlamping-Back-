import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitaciones{

    constructor(){}
    async registrarHabitacion(peticion, respuesta){
        try{   
            let servicioHabitacion = new ServicioHabitacion()
            //1. Esculcar los datos que quieren usar para el registro
            let datosHabitacionRegistrar = peticion.body
            //2. Validar los datos
            //3. Intentar guardar los datos
            await servicioHabitacion.registrarHabitacion(datosHabitacionRegistrar)
            //4. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos": datosHabitacionRegistrar
            }) 

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado" + error
            })
        }
    }
    async buscarHabitacion(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            // 1. Intentar buscar los datos en BD
            // 2. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad",
                "datos": await servicioHabitacion.buscarHabitaciones()
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de busquedad" + error
            })
        }
    }
    async buscarHabitacionPorId(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            // 1.Esculcar los parametros de la peticion
            let idHabitacionBuscar = peticion.params.id
            // 2.Validar el dato
            // 3.Intento buscar el dato en BD
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad",
                "datos": await servicioHabitacion.buscarHabitacion(idHabitacionBuscar)
            })

        }catch(error){
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad" + error
            })
        }
    }
    async modificarHabitacion(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            // 1.Traigo el id a editar de la peticion
            let idHabitacionModificar = peticion.params.id
            let datosHabitacionModificar = peticion.body
            // 2.Validar los datos
            // 3.Buscar y modificar en BD
            await servicioHabitacion.modificarHabitacion(idHabitacionModificar, datosHabitacionModificar)
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos": datosHabitacionModificar
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion" + error
            })
        }
    }
    async borrarHabitacion(peticion, respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            // 1.Traigo el id a eliminar
            let idHabitacionBorrar = peticion.params.id
            // 2.Validar datos
            // 3.Intento borrar la habitacion en BD
            await servicioHabitacion.borrarHabitacion(idHabitacionBorrar)
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