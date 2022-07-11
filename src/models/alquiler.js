const Cliente = require('./cliente');
const Maquinaria = require('./maquinaria')
const {Schema, model} = require('mongoose');

const alquilerSchema = new Schema({
    cliente: {type: Schema.Types.ObjectId, ref: Cliente},
    maquinaria: {type: Schema.Types.ObjectId, ref: Maquinaria},
    fechaAlquiler: {type: String},
    fechaDevolucion: {type: String},
    precio: {type: Number},
})

module.exports = model('Alquiler', alquilerSchema);