const maquinariaCtl = {};
const Maquinaria = require('../models/maquinaria');

maquinariaCtl.getMaquinarias = async (req, res)=>{
    const maquinarias = await Maquinaria.find();
    res.json(maquinarias);
};

maquinariaCtl.createMaquinaria = async (req, res)=>{
    const newMaquinaria = new Maquinaria(req.body);
    await newMaquinaria.save();
    res.send({message: 'Maquinaria creada exitosamente.'});
};

module.exports = maquinariaCtl;