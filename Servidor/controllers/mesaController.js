const Mesa = require('../models/Mesa');
const Restaurante = require('../models/Restaurante');
const {validationResult} = require('express-validator');

//Crea un nuevo mesa

exports.crearMesa = async (req, res) =>{
   //Revisar si hay errores
   const errores = validationResult(req);
   if(!errores.isEmpty()){
       return res.status(400).json({errores: errores.array()})
   }

   //Extraer el restaurante y comprobar si existe
   const {restaurante} = req.body;
   try {
       const existeRestaurante = await Restaurante.findById(restaurante);
       if(!existeRestaurante){
           return res.status(404).json({msg: 'Restaurante no encontrado'})
       }

       //Revisar si el restaurante actual pertenece al usuario autenticado
       if(existeRestaurante.creador.toString() !== req.usuario.id){
        return res.status(401).json({msg: 'No autorizado'});
    }

    //Creamos la mesa
    const mesa = new Mesa(req.body);
    await mesa.save();
    res.json({mesa});

   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
           
}

//Obtiene los mesas por restaurante
exports.obtenerMesas = async (req, res) =>{
    try {
        //Extraer el restaurante y comprobar si existe
   const {restaurante} = req.query;
   //console.log(req.query);
        const existeRestaurante = await Restaurante.findById(restaurante);
        if(!existeRestaurante){
            return res.status(404).json({msg: 'Restaurante no encontrado'})
        }
 

     //Obtener mesas por restaurante
     const mesas = await Mesa.find({restaurante });
     res.json({mesas});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Obtiene una mesa
exports.obtenerUnaMesa = async (req, res) =>{
    try {
        //Extraer la sesion general y comprobar si existe
        const {mesa} = req.query;
        const mesaobtenida = await Mesa.findById(mesa);

        res.json({mesaobtenida});
    } catch (error) {
        
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

//Actualizar un mesa

exports.actualizarMesa = async(req, res) =>{
    try {
         //Extraer el restaurante y comprobar si existe
   const {restaurante, numero, disponible} = req.body;
   const existeRestaurante = await Restaurante.findById(restaurante);
 
   //Revisar si el mesa existe o no
    let mesaExiste = await Mesa.findById(req.params.id);
    if(!mesaExiste){
        return res.status(404).json({msg: "No existe la mesa"});
    }
   //Revisar si el restaurante actual pertenece al usuario autenticado
   if(existeRestaurante.creador.toString() !== req.usuario.id){
    return res.status(401).json({msg: 'No autorizado'});
}
//Crear un objeto con la nueva informacion
const nuevaMesa ={};
if(numero){
    nuevaMesa.numero = numero;
}

if(disponible){
    nuevaMesa.disponible = disponible;
}

//guardar mesa 
mesa = await Mesa.findOneAndUpdate({_id: req.params.id}, nuevaMesa, {
    new: true});
    res.json({mesa})
        
    } catch (error) {
        console.timeLog(error);
        res.status(500).send('Hubo un error');

    }
}

//eliminar Mesa
exports.eliminarMesa = async (req, res) =>{

    try {
        //Extraer el restaurante y comprobar si existe
  const {restaurante} = req.body;
  const existeRestaurante = await Restaurante.findById(restaurante);

  //Revisar si la mesa existe o no
   let mesaExiste = await Mesa.findById(req.params.id);
   if(!mesaExiste){
       return res.status(404).json({msg: "No existe la mesa"});
   }
  //Revisar si el restaurante actual pertenece al usuario autenticado
  if(existeRestaurante.creador.toString() !== req.usuario.id){
   return res.status(401).json({msg: 'No autorizado'});
}

//eliminar
await Mesa.findByIdAndRemove({_id: req.params.id});
res.json({msg: 'mesa eliminado'})
       
   } catch (error) {
       console.timeLog(error);
       res.status(500).send('Hubo un error');

   }

}