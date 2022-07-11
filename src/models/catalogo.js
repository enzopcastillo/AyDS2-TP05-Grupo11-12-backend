const {Schema, model} = require('mongoose');

const CatalogoSchema = new Schema({
    codigo: {type: String, required: true},
    fechaVigencia: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoriaMaquinaria: {type: String, required: true},
    imagen: {type: String, required: true},
})

module.exports = model('Catalogo', CatalogoSchema);