const Orden = require('../models/Orden');
const SesionIndividual = require('../models/SesionIndividual');

const {validationResult} = require('express-validator');

//Crea un nuevo orden

exports.crearOrden = async (req, res) =>{
   //Revisar si hay errores
   const errores = validationResult(req);
   if(!errores.isEmpty()){
       return res.status(400).json({errores: errores.array()})
   }

   //Extraer la sesionIndividual y comprobar si existe
   const {sesionIndividual} = req.body;
   try {
       const existeSesionIndividual = await SesionIndividual.findById(sesionIndividual);
       if(!existeSesionIndividual){
           return res.status(404).json({msg: 'SesionIndividual no encontrada'})
       }
      

       

    //Creamos la orden
    const orden = new Orden(req.body);
    await orden.save();
    res.json({orden});

   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
           
}

//Obtiene las sesiones individuales por sesion general
exports.obtenerOrdenes = async (req, res) =>{
    try {
        //Extraer la sesion general y comprobar si existe
   const {sesionIndividual} = req.query;
   //console.log(req.query);
        const existeSesionIndividual = await SesionIndividual.findById(sesionIndividual);
        if(!existeSesionIndividual){
            return res.status(404).json({msg: 'SesionIndividual no encontrada'})
        }
 

     //Obtener sesiones generales por mesa
     const ordenes = await Orden.find({sesionIndividual });
     res.json({ordenes});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar una sesionIndividual

exports.actualizarOrden = async(req, res) =>{
    try {
         //Extraer la sesionIndividual y comprobar si existe
   const {sesionIndividual, horarioInicio, horarioFin,total} = req.body;
   const existeSesionIndividual = await SesionIndividual.findById(sesionIndividual);
 
   //Revisar si la orden existe o no
    let ordenExiste = await Orden.findById(req.params.id);
    if(!ordenExiste){
        return res.status(404).json({msg: "No existe la orden"});
    }
   
//Crear un objeto con la nueva informacion
const nuevaOrden ={};

if(horarioInicio){
    nuevaOrden.horarioInicio = horarioInicio;
}
if(horarioFin){
    nuevaOrden.horarioFin = horarioFin;
}
if(total){
    nuevaOrden.total = total;
}
//guardar sesionIndividual 
orden = await Orden.findOneAndUpdate({_id: req.params.id}, nuevaOrden, {
    new: true});
    res.json({orden})
        
    } catch (error) {
        console.timeLog(error);
        res.status(500).send('Hubo un error');

    }
}

//eliminar Menu
exports.eliminarOrden = async (req, res) =>{

    try {
        //Extraer la mesa y comprobar si existe
  const {sesionIndividual} = req.body;
  const existeSesionIndividual = await SesionIndividual.findById(sesionIndividual);

  //Revisar si el menu existe o no
   let ordenExiste = await Orden.findById(req.params.id);
   if(!ordenExiste){
       return res.status(404).json({msg: "No existe la orden"});
   }
  

//eliminar
await Orden.findByIdAndRemove({_id: req.params.id});
res.json({msg: 'orden eliminada'})
       
   } catch (error) {
       console.timeLog(error);
       res.status(500).send('Hubo un error');

   }

}