const {Schema, model} = require('mongoose');

const maquinariaSchema = new Schema({
    codigo: {type: String},
    marca: {type: String},
    modelo: {type: String},
    fechaAdquisicion: {type: String},
    imagen: {type: String},
    estado: {type: String},
    categoria: {type: String},
})

module.exports = model('Maquinaria', maquinariaSchema);