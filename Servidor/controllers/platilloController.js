const Platillo = require("../models/Platillo");
const Seccion = require("../models/Seccion");
const { validationResult } = require("express-validator");

//Crea un nuevo platillo

exports.crearPlatillo = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    console.log(errores);
    return res.status(400).json({ errores: errores.array() });
  }

  //Extraer el seccion y comprobar si existe
  const { seccion } = req.body;
  try {
    const existeSeccion = await Seccion.findById(seccion);
    if (!existeSeccion) {
      return res.status(404).json({ msg: "Seccion no encontrada" });
    }

    //Revisar si la seccion actual pertenece al usuario autenticado
    if (existeSeccion.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    //Creamos el platillo
    const platillo = new Platillo(req.body);
    await platillo.save();
    res.json({ platillo });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Obtiene los platillos por seccion
exports.obtenerPlatillos = async (req, res) => {
  try {
    //Extraer la seccion y comprobar si existe
    const { seccion } = req.query;
    const existeSeccion = await Seccion.findById(seccion);
    if (!existeSeccion) {
      return res.status(404).json({ msg: "Seccion no encontrada" });
    }


    //Obtener platillos por seccion
    const platillos = await Platillo.find({ seccion });
    res.json({ platillos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Actualizar una platillo

exports.actualizarPlatillo = async (req, res) => {
  try {
    //Extraer la seccion y comprobar si existe
    const { seccion, nombre, disponible, precio, descripcion, imagenPlatillo } =
      req.body;
    const existeSeccion = await Seccion.findById(seccion);

    //Revisar si el platillo existe o no
    let platilloExiste = await Platillo.findById(req.params.id);
    if (!platilloExiste) {
      return res.status(404).json({ msg: "No existe el platillo" });
    }
    //Revisar si la seccion actual pertenece al usuario autenticado
    if (existeSeccion.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }
    //Crear un objeto con la nueva informacion
    const nuevoPlatillo = {};

    if (nombre) {
      nuevoPlatillo.nombre = nombre;
    }

    if (disponible !== null) {
      nuevoPlatillo.disponible = disponible;
    }

    if (precio) {
      nuevoPlatillo.precio = precio;
    }

    if (descripcion) {
      nuevoPlatillo.descripcion = descripcion;
    }
    if (imagenPlatillo) {
      nuevoPlatillo.imagenPlatillo = imagenPlatillo;
    }

    //guardar platillo
    platillo = await Platillo.findOneAndUpdate(
      { _id: req.params.id },
      nuevoPlatillo,
      {
        new: true,
      }
    );
    res.json({ platillo });
  } catch (error) {
    console.timeLog(error);
    res.status(500).send("Hubo un error");
  }
};

//eliminar Platillo
exports.eliminarPlatillo = async (req, res) => {
  try {
    //Extraer la seccion y comprobar si existe
    const { seccion } = req.query;
    const existeSeccion = await Seccion.findById(seccion);

    //Revisar si el platillo existe o no
    let platilloExiste = await Platillo.findById(req.params.id);
    if (!platilloExiste) {
      return res.status(404).json({ msg: "No existe el platillo" });
    }

    //eliminar
    await Platillo.findByIdAndRemove({ _id: req.params.id });
    res.json({ msg: "platillo eliminado" });
  } catch (error) {
    console.timeLog(error);
    res.status(500).send("Hubo un error");
  }
};
