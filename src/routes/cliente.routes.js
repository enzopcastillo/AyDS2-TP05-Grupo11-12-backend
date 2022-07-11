const {Router} = require('express');
const router = Router();
const clienteCtl = require('../controllers/cliente.controllers');

router.get('/', clienteCtl.getClientes);
router.post('/', clienteCtl.createCliente);

module.exports = router;