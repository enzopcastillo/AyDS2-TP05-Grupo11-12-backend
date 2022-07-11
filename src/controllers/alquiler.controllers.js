const alquilerCtl = {};
const Alquiler = require('../models/alquiler');

alquilerCtl.getAlquileres = async (req, res)=>{
    const clientes = await Alquiler.find();
    res.json(clientes);
};

alquilerCtl.createAlquiler = async (req, res)=>{
    const newAlquiler = new Alquiler(req.body);
    await newAlquiler.save();
    res.send({message: 'Alquiler creado exitosamente.'});
};

module.exports = alquilerCtl;