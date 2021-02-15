const Platillo = require('../models/Platillo');
const PlatilloOrdenado = require('../models/PlatilloOrdenado');
const SesionIndividual = require('../models/SesionIndividual');
const {validationResult} = require('express-validator');

//Crea un nuevo platillo

exports.crearPlatilloOrdenado = async (req, res) =>{
   //Revisar si hay errores
   const errores = validationResult(req);
   if(!errores.isEmpty()){
       console.log(errores);
       return res.status(400).json({errores: errores.array()}) 
   }

   //Extraer el seccion y comprobar si existe
   const {sesionIndividual} = req.body;
   try {
       const existeSesionIndividual = await SesionIndividual.findById(sesionIndividual);
       if(!existeSesionIndividual){
           return res.status(404).json({msg: 'SesionIndividual no encontrada'})
       }

    //Creamos el platilloOrdenado
    const platilloOrdenado = new PlatilloOrdenado(req.body);
    await platilloOrdenado.save();
    res.json({platillo});

   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
           
}

//Obtiene los platillosORdenados por sesionIndividual
exports.obtenerPlatillosOrdenados = async (req, res) =>{
    try {
        //Extraer la sesionIndividual y comprobar si existe
   const {sesionIndividual} = req.query;
        const existeSesionIndividual = await SesionIndividual.findById(sesionIndividual);
        if(!existeSesionIndividual){
            return res.status(404).json({msg: 'SesionIndividual no encontrada'})
        }
 

     //Obtener platillosOrdenados por seccion
     const platillosOrdenados = await PlatilloOrdenado.find({sesionIndividual });
     res.json({platillosOrdenados});
    } catch (error) { 
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar una platilloOrdenado


exports.actualizarPlatilloOrdenado = async(req, res) =>{
    try {
         //Extraer la sesionIndividual y comprobar si existe
   const {sesionIndividual, nombre, comentario, precio} = req.body;
   const existeSesionIndividual = await SesionIndividual.findById(sesionIndividual);
 
   //Revisar si el platilloOrdenado existe o no
    let platilloOrdenadoExiste = await PlatilloOrdenado.findById(req.params.id);
    if(!platilloOrdenadoExiste){
        return res.status(404).json({msg: "No existe el platilloOrdenado"});
    }
  
//Crear un objeto con la nueva informacion
const nuevoPlatilloOrdenado ={};
if(nombre){
    nuevoPlatilloOrdenado.nombre = nombre;
}


if(precio){
    nuevoPlatilloOrdenado.precio = precio;
}

if(comentario){
    nuevoPlatilloOrdenado.descripcion = descripcion;
}

//guardar platilloOrdenado
platilloOrdenado = await PlatilloOrdenado.findOneAndUpdate({_id: req.params.id}, nuevoPlatilloOrdenado, {
    new: true});
    res.json({platilloOrdenado})
        
    } catch (error) {
        console.timeLog(error);
        res.status(500).send('Hubo un error');

    }
}

//eliminar PlatilloOrdenado
exports.eliminarPlatilloOrdenado = async (req, res) =>{

    try {
        //Extraer la seccion y comprobar si existe
  const {sesionIndividual} = req.query;
  const existeSeccionIndividual = await SesionIndividual.findById(sesionIndividual);

  //Revisar si el platillo existe o no
   let platilloOrdenadoExiste = await PlatilloOrdenado.findById(req.params.id);
   if(!platilloOrdenadoExiste){
       return res.status(404).json({msg: "No existe el platilloOrdenado"});
   }
 

//eliminar
await PlatilloOrdenado.findByIdAndRemove({_id: req.params.id});
res.json({msg: 'platilloOrdenado eliminado'})
       
   } catch (error) {
       console.timeLog(error);
       res.status(500).send('Hubo un error');

   }

}