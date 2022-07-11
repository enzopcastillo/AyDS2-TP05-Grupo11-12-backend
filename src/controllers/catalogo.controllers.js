const catalogoCtl = {};
const Catalogo = require('../models/catalogo');

catalogoCtl.getCatalogos = async (req, res)=>{
    const catalogos = await Catalogo.find();
    res.json(catalogos);
};

catalogoCtl.createCatalogo = async (req, res)=>{
    const newCatalogo = new Catalogo(req.body);
    await newCatalogo.save();
    res.send({message: 'Catalogo creado exitosamente.'});
};

module.exports = catalogoCtl;