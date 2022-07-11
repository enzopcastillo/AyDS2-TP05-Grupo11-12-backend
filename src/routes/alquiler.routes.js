const {Router} = require('express');
const router = Router();
const alquilerCtl = require('../controllers/alquiler.controllers');

router.get('/', alquilerCtl.getAlquileres);
router.post('/', alquilerCtl.createAlquiler);

module.exports = router;