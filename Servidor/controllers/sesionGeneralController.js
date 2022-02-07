const SesionGeneral = require('../models/SesionGeneral');
const Mesa = require('../models/Mesa');
const {validationResult} = require('express-validator');

//Crea un nuevo sesionGeneral

exports.crearSesionGeneral = async (req, res) =>{
   //Revisar si hay errores
   const errores = validationResult(req);
   if(!errores.isEmpty()){
       return res.status(400).json({errores: errores.array()})
   }

   //Extraer la mesa y comprobar si existe
   const {mesa} = req.body;
   try {
       const existeMesa = await Mesa.findById(mesa);
       if(!existeMesa){
           return res.status(404).json({msg: 'Mesa no encontrada'})
       }
      

       

    //Creamos la sesionGeneral
    const sesionGeneral = new SesionGeneral(req.body);
    await sesionGeneral.save();
    res.json({sesionGeneral});

   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
           
}

//Obtiene las sesiones generales por mesa
exports.obtenerSesionesGenerales = async (req, res) =>{
    try {
        //Extraer la mesa y comprobar si existe
   const {mesa} = req.query;
   //console.log(req.query);
        const existeMesa = await Mesa.findById(mesa);
        if(!existeMesa){
            return res.status(404).json({msg: 'Mesa no encontrada'})
        }
 

     //Obtener sesiones generales por mesa
     const sesionesGenerales = await SesionGeneral.find({mesa});
     res.json({sesionesGenerales});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar una sesionGeneral

exports.actualizarSesionGeneral = async(req, res) =>{
    try {
         //Extraer la mesa y comprobar si existe
   const {mesa, numero, disponible} = req.body;
   const existeMesa = await Mesa.findById(mesa);
 
   //Revisar si la sesionGeneral existe o no
    let sesionGeneralExiste = await SesionGeneral.findById(req.params.id);
    if(!sesionGeneralExiste){
        return res.status(404).json({msg: "No existe la sesion general"});
    }
   
//Crear un objeto con la nueva informacion
const nuevaSesionGeneral ={};

if(horarioInicio){
    nuevaSesionGeneral.horarioInicio = horarioInicio;
}
if(horarioFin){
    nuevaSesionGeneral.horarioFin = horarioFin;
}
//guardar sesionGeneral 
sesionGeneral = await SesionGeneral.findOneAndUpdate({_id: req.params.id}, nuevaSesionGeneral, {
    new: true});
    res.json({sesionGeneral})
        
    } catch (error) {
        console.timeLog(error);
        res.status(500).send('Hubo un error');

    }
}

//eliminar Menu
exports.eliminarSesionGeneral = async (req, res) =>{

    try {
        //Extraer la mesa y comprobar si existe
  const {mesa} = req.body;
  const existeMesa = await Mesa.findById(mesa);

  //Revisar si el menu existe o no
   let sesionGeneralExiste = await SesionGeneral.findById(req.params.id);
   if(!sesionGeneralExiste){
       return res.status(404).json({msg: "No existe la sesion general"});
   }
  

//eliminar
await SesionGeneral.findByIdAndRemove({_id: req.params.id});
res.json({msg: 'sesion general eliminada'})
       
   } catch (error) {
       console.timeLog(error);
       res.status(500).send('Hubo un error');

   }

}