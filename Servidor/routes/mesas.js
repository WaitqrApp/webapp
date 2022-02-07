const express = require('express');
const router = express.Router();
const mesaController = require('../controllers/mesaController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear un mesa
//api/mesas
router.post('/',
auth,
[
    check('numero','El numero es obligatorio').not().isEmpty(),
    check('restaurante','El restaurante es obligatorio').not().isEmpty()
],

mesaController.crearMesa
);

router.get('/',
mesaController.obtenerMesas
);

//obtener todos los proyectos
router.get('/mesa', 
mesaController.obtenerUnaMesa
);

//Actualizar mesa
router.put('/:id',
    auth,
    mesaController.actualizarMesa
);

//Eliminar menu
router.delete('/:id',
auth,
    mesaController.eliminarMesa
);

module.exports = router;