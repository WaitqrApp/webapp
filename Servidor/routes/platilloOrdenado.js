const express = require('express');
const router = express.Router();
const platilloOrdenadoController = require('../controllers/platilloOrdenadoController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear un platillo
//api/platillos
router.post('/',
auth,
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('precio','El precio es obligatorio').not().isEmpty(),
    check('sesionIndividual','La seccionIndividual es obligatoria').not().isEmpty()

],

platilloOrdenadoController.crearPlatilloOrdenado
);

router.get('/',
auth,
platilloOrdenadoController.obtenerPlatillosOrdenados
);

//Actualizar platilloOrdenado
router.put('/:id',
    auth,
    platilloOrdenadoController.actualizarPlatilloOrdenado
);

//Eliminar platillo Ordenado
router.delete('/:id',
auth,
    platilloOrdenadoController.eliminarPlatilloOrdenado
);

module.exports = router;