const express = require('express');
const router = express.Router();
const sesionGeneralController = require('../controllers/sesionGeneralController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear un menu
//api/menus
router.post('/',

[
    //check('Horario Inicio','El horario inicio es obligatorio').not().isEmpty(),
    check('mesa','La mesa es obligatoria').not().isEmpty()
],

sesionGeneralController.crearSesionGeneral
);

router.get('/',
sesionGeneralController.obtenerSesionesGenerales
);

//Actualizar sesionGeneral
router.put('/:id',
    auth,
    sesionGeneralController.actualizarSesionGeneral
);

//Eliminar menu
router.delete('/:id',
auth,
    sesionGeneralController.eliminarSesionGeneral
);

module.exports = router;