const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//crear un menu
//api/menus
router.post('/',
auth,
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('restaurante','El restaurante es obligatorio').not().isEmpty()
],

menuController.crearMenu
);

router.get('/',
menuController.obtenerMenus
);

//Actualizar menu
router.put('/:id',
    auth,
    menuController.actualizarMenu
);

//Eliminar menu
router.delete('/:id',
auth,
    menuController.eliminarMenu
);

module.exports = router;