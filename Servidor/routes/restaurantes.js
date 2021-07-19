const express = require('express');
const router = express.Router();
const restauranteController = require('../controllers/restauranteController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')


//Crea restaurantes
//api/restaurantes
router.post('/', 
    auth,
    [
        check('nombre', 'El nombre del restaurante es obligatorio').not().isEmpty()
    ],
    restauranteController.crearRestaurante
)

//obtener todos los proyectos
router.get('/', 
    auth,
    restauranteController.obtenerRestaurante
)

//obtener todos los proyectos
router.get('/restaurante', 
    restauranteController.obtenerUnRestaurante
)

//Actualizar proyecto via ID
router.put('/:id',
auth,
[
    check('nombre', 'El nombre del restaurante es obligatorio').not().isEmpty()
],
restauranteController.actualizarRestaurante
);

//Eliminar un proyecto
router.delete('/:id',
auth,
restauranteController.eliminarRestaurante
);

module.exports = router;