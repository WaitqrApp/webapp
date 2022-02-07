const SesionIndividual = require('../models/SesionIndividual');
const SesionGeneral = require('../models/SesionGeneral');

const {validationResult} = require('express-validator');

//Crea un nuevo sesionIndividual

exports.crearSesionIndividual = async (req, res) =>{
   //Revisar si hay errores
   const errores = validationResult(req);
   if(!errores.isEmpty()){
       return res.status(400).json({errores: errores.array()})
   }

   //Extraer la sesionGeneral y comprobar si existe
   const {sesionGeneral} = req.body;
   try {
       const existeSesionGeneral = await SesionGeneral.findById(sesionGeneral);
       if(!existeSesionGeneral){
           return res.status(404).json({msg: 'SesionGeneral no encontrada'})
       }
      

       

    //Creamos la sesionIndividual
    const sesionIndividual = new SesionIndividual(req.body);
    await sesionIndividual.save();
    res.json({sesionIndividual});

   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
           
}

//Obtiene las sesiones individuales por sesion general
exports.obtenerSesionesIndividuales = async (req, res) =>{ 
    try {
        //Extraer la sesion general y comprobar si existe
   const {sesionGeneral} = req.query;
   //console.log(req.query);
        const existeSesionGeneral = await SesionGeneral.findById(sesionGeneral);
        if(!existeSesionGeneral){
            return res.status(666).json({msg: 'SesionGeneral no encontrada'})
        }
 

     //Obtener sesiones individuales por sesion general 
     const sesionesIndividuales = await SesionIndividual.find({sesionGeneral});
     res.json({sesionesIndividuales});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar una sesionGeneral

exports.actualizarSesionIndividual = async(req, res) =>{
    try {
         //Extraer la sesionGeneral y comprobar si existe
   const {sesionGeneral, horarioInicio, horarioFin} = req.body;
   const existeSesionGeneral = await SesionGeneral.findById(sesionGeneral);
 
   //Revisar si la sesionIndividual existe o no
    let sesionIndividualExiste = await SesionIndividual.findById(req.params.id);
    if(!sesionIndividualExiste){
        return res.status(404).json({msg: "No existe la sesion individual"});
    }
   
//Crear un objeto con la nueva informacion
const nuevaSesionIndividual ={};

if(horarioInicio){
    nuevaSesionIndividual.horarioInicio = horarioInicio;
}
if(horarioFin){
    nuevaSesionIndividual.horarioFin = horarioFin;
}
//guardar sesionGeneral 
sesionIndividual = await SesionIndividual.findOneAndUpdate({_id: req.params.id}, nuevaSesionIndividual, {
    new: true});
    res.json({sesionIndividual})
        
    } catch (error) {
        console.timeLog(error);
        res.status(500).send('Hubo un error');

    }
}

//eliminar Menu
exports.eliminarSesionIndividual = async (req, res) =>{

    try {
        //Extraer la mesa y comprobar si existe
  const {sesionGeneral} = req.body;
  const existeSesionGeneral = await SesionGeneral.findById(sesionGeneral);

  //Revisar si el menu existe o no
   let sesionIndividualExiste = await SesionIndividual.findById(req.params.id);
   if(!sesionIndividualExiste){
       return res.status(404).json({msg: "No existe la sesion individual"});
   }
  

//eliminar
await SesionIndividual.findByIdAndRemove({_id: req.params.id});
res.json({msg: 'sesion individual eliminada'})
       
   } catch (error) {
       console.timeLog(error);
       res.status(500).send('Hubo un error');

   }

}