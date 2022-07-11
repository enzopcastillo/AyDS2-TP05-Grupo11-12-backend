const {Schema, model} = require('mongoose');

const clienteSchema = new Schema({
    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    tipoDocumento: {type: String, required: true},
    numDocumento: {type: String, required: true},
    telefono: {type: String, required: true},
    razonSocial: {type: String, required: true},
    codigoPostal: {type: String, required: true},
    direccion: {type: String, required: true},
    fechaAlta: {type: String, required: true},
})

module.exports = model('Cliente', clienteSchema);