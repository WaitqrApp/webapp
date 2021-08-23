const Menu = require('../models/Menu');
const Seccion = require('../models/Seccion');
const {validationResult} = require('express-validator');

//Crea un nuevo menu

exports.crearSeccion = async (req, res) =>{
   //Revisar si hay errores
   const errores = validationResult(req);
   if(!errores.isEmpty()){
       return res.status(400).json({errores: errores.array()})
   }

   //Extraer el menu y comprobar si existe
   const {menu} = req.body;
   try {
       const existeMenu = await Menu.findById(menu);
       if(!existeMenu){
           return res.status(404).json({msg: 'Menu no encontrado'})
       }

       //Revisar si el menu actual pertenece al usuario autenticado
       if(existeMenu.creador.toString() !== req.usuario.id){
        return res.status(401).json({msg: 'No autorizado'});
    }

    //Creamos la seccion
    const seccion = new Seccion(req.body);
    seccion.creador = req.usuario.id;

    await seccion.save();
    res.json({seccion});

   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
           
}

//Obtiene las secciones por menu
exports.obtenerSecciones = async (req, res) =>{
    try {
        //Extraer el menu y comprobar si existe
   const {menu} = req.query; 
   console.log(req.query);
        const existeMenu = await Menu.findById(menu);
        if(!existeMenu){
            return res.status(404).json({msg: 'Menu no encontrado'})
        }

     //Obtener secciones por menu
     const secciones = await Seccion.find({menu });
     res.json({secciones}); 
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar una seccion


exports.actualizarSeccion = async(req, res) =>{
    try {
         //Extraer el Menu y comprobar si existe
   const {menu, nombre, disponible, horarioInicio, horarioFin} = req.body; 
   const existeMenu = await Menu.findById(menu);
 
   //Revisar si la seccion existe o no
    let seccionExiste = await Seccion.findById(req.params.id);
    if(!seccionExiste){
        return res.status(404).json({msg: "No existe la seccion"});
    }
   //Revisar si el menu actual pertenece al usuario autenticado
   if(existeMenu.creador.toString() !== req.usuario.id){
    return res.status(401).json({msg: 'No autorizado'});
}
//Crear un objeto con la nueva informacion
const nuevaSeccion ={};
if(nombre){
    nuevaSeccion.nombre = nombre;
}
if(horarioInicio){
    nuevaSeccion.horarioInicio = horarioInicio;
}
if(horarioFin){
    nuevaSeccion.horarioFin = horarioFin;
}
if(disponible){
    nuevaSeccion.disponible = disponible;
}

//guardar seccion
seccion = await Seccion.findOneAndUpdate({_id: req.params.id}, nuevaSeccion, {
    new: true});
    res.json({seccion})
        
    } catch (error) {
        console.timeLog(error);
        res.status(500).send('Hubo un error'); 

    }
}

//eliminar Seccion
exports.eliminarSeccion = async (req, res) =>{

    try {
        //Extraer el menu y comprobar si existe
  const {menu} = req.body;
  const existeMenu = await Menu.findById(menu);

  //Revisar si el menu existe o no
   let seccionExiste = await Seccion.findById(req.params.id);
   if(!seccionExiste){
       return res.status(404).json({msg: "No existe la seccion"});
   }
 
//eliminar
await Seccion.findByIdAndRemove({_id: req.params.id});
res.json({msg: 'seccion eliminada'})
       
   } catch (error) {
       console.timeLog(error);
       res.status(500).send('Hubo un error');

   }

}