const express = require('express');
const router = express.Router();
const platilloOrdenadoController = require('../controllers/platilloOrdenadoController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear un platillo
//api/platillos
router.post('/',

[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('precio','El precio es obligatorio').not().isEmpty(),
    check('orden','La orden es obligatoria').not().isEmpty()

],

platilloOrdenadoController.crearPlatilloOrdenado
);

router.get('/',

platilloOrdenadoController.obtenerPlatillosOrdenados
);

//Actualizar platilloOrdenado
router.put('/:id',
    
    platilloOrdenadoController.actualizarPlatilloOrdenado
);

//Eliminar platillo Ordenado
router.delete('/:id',

    platilloOrdenadoController.eliminarPlatilloOrdenado
);

module.exports = router;