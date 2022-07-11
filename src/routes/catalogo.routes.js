const {Router} = require('express');
const router = Router();
const catalogoCtl = require('../controllers/catalogo.controllers');

router.get('/', catalogoCtl.getCatalogos);
router.post('/', catalogoCtl.createCatalogo);

module.exports = router;