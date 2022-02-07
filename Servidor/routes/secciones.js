const express = require('express');
const router = express.Router();
const seccionController = require('../controllers/seccionController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear una seccion
//api/secciones
router.post('/',
auth,
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('menu','El menu es obligatorio').not().isEmpty()
],

seccionController.crearSeccion
);

router.get('/',
seccionController.obtenerSecciones
);

//Actualizar seccion
router.put('/:id',
    auth,
    seccionController.actualizarSeccion
);

//Eliminar menu
router.delete('/:id',
auth,
    seccionController.eliminarSeccion
);

module.exports = router;