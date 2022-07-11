const {Router} = require('express');
const router = Router();
const maquinariaCtl = require('../controllers/maquinaria.controllers');

router.get('/', maquinariaCtl.getMaquinarias);
router.post('/', maquinariaCtl.createMaquinaria);

module.exports = router;