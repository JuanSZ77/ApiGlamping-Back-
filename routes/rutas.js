
import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

// Para poder llamar al controlador debo crear un objeto de la clase controlador habitacion
// Para poder llamar al controlador debo crear un objeto de la clase controlador reservas

let controladorHabitacion = new ControladorHabitaciones();
let controladorReservas = new ControladorReservas();

export let rutas = express.Router()

//Habitaciones

rutas.post('/api/habitaciones', controladorHabitacion.registrarHabitacion)

rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionPorId)

rutas.get('/api/habitaciones', controladorHabitacion.buscarHabitacion)

rutas.put('/api/habitaciones/:id', controladorHabitacion.modificarHabitacion)

rutas.delete('/api/habitaciones/:id', controladorHabitacion.borrarHabitacion)

//Reservas

rutas.post('/api/reservas', controladorReservas.registrarReserva)

rutas.get('/api/reserva/:id', controladorReservas.buscarReservaPorId)

rutas.get('/api/reservas', controladorReservas.buscarReserva)

rutas.put('/api/reservas/:id', controladorReservas.modificarReserva)

rutas.delete('/api/reservas/:id', controladorReservas.borrarReserva)