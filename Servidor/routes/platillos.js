const express = require('express');
const router = express.Router();
const platilloController = require('../controllers/platilloController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear un platillo
//api/platillos
router.post('/',
auth,
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('precio','El precio es obligatorio').not().isEmpty(),
    check('seccion','La seccion es obligatoria').not().isEmpty(),

],

platilloController.crearPlatillo
);

router.get('/',
platilloController.obtenerPlatillos
);

//Actualizar platillo
router.put('/:id',
    auth,
    platilloController.actualizarPlatillo
);

//Eliminar menu
router.delete('/:id',
auth,
    platilloController.eliminarPlatillo
);

module.exports = router;