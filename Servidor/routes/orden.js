const express = require("express");
const router = express.Router();
const ordenController = require("../controllers/ordenController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crear una orden
//api/ordenes
router.post("/",
  [
    //check('Horario Inicio','El horario inicio es obligatorio').not().isEmpty(),
    check("sesionIndividual", "La sesion individual es obligatoria")
      .not()
      .isEmpty(),
  ],

  ordenController.crearOrden
);

router.get("/restaurante/", ordenController.obtenerOrdenesRestaurante);

router.get("/sesionIndividual/", ordenController.obtenerOrdenSesionIndividual);

//Actualizar orden
router.put("/:id", ordenController.actualizarOrden);

//Eliminar orden
router.delete("/:id", auth, ordenController.eliminarOrden);

module.exports = router;
