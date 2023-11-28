import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema({
    fechaEntrada: {
        type:Date,
        required: true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    cantidadPersonas:{
        type:Number,
        required:true
    },
    nombrePersonaReserva:{
        type:String,
        required:true
    },
    costo:{
        type:Number,
        required:false
    }
})

export const modeloReserva = mongoose.model('reservas', Reserva)