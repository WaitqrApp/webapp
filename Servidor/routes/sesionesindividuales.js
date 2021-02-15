const express = require('express');
const router = express.Router();
const sesionIndividualController = require('../controllers/sesionIndividualController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear un menu
//api/menus
router.post('/',
auth,
[
    check('Horario Inicio','El horario inicio es obligatorio').not().isEmpty(),
    check('sesionGeneral','La sesion general es obligatoria').not().isEmpty()
],

sesionIndividualController.crearSesionIndividual
);

router.get('/',
auth,
sesionIndividualController.obtenerSesionesIndividuales
);

//Actualizar sesionIndividual
router.put('/:id',
    auth,
    sesionIndividualController.actualizarSesionIndividual
);

//Eliminar sesionIndividual
router.delete('/:id',
auth,
    sesionIndividualController.eliminarSesionIndividual
);

module.exports = router;