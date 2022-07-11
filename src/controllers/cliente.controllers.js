const clienteCtl = {};
const Cliente = require('../models/cliente');

clienteCtl.getClientes = async (req, res)=>{
    const clientes = await Cliente.find();
    res.json(clientes);
};

clienteCtl.createCliente = async (req, res)=>{
    const newCliente = new Cliente(req.body);
    await newCliente.save();
    res.send({message: 'Cliente creado exitosamente.'});
};

module.exports = clienteCtl;