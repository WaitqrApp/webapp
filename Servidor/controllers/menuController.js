const Menu = require('../models/Menu');
const Restaurante = require('../models/Restaurante');
const {validationResult} = require('express-validator');

//Crea un nuevo menu

exports.crearMenu = async (req, res) =>{
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

    //Creamos el menu
    const menu = new Menu(req.body);
    //Guardar el creador via JWT 
    menu.creador = req.usuario.id;
    await menu.save();
    res.json({menu});

   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
           
}

//Obtiene los menus por restaurante
exports.obtenerMenus = async (req, res) =>{
    try {
        //Extraer el restaurante y comprobar si existe
   const {restaurante} = req.query;
   //console.log(req.query);
        const existeRestaurante = await Restaurante.findById(restaurante);
        if(!existeRestaurante){
            return res.status(404).json({msg: 'Restaurante no encontrado'})
        }
 

     //Obtener menus por restaurante
     const menus = await Menu.find({restaurante });
     res.json({menus});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar un menu

exports.actualizarMenu = async(req, res) =>{
    try {
         //Extraer el restaurante y comprobar si existe
   const {restaurante, nombre, disponible, horarioInicio, horarioFin} = req.body;
   const existeRestaurante = await Restaurante.findById(restaurante);
 
   //Revisar si el menu existe o no
    let menuExiste = await Menu.findById(req.params.id);
    if(!menuExiste){
        return res.status(404).json({msg: "No existe el menu"});
    }
   //Revisar si el restaurante actual pertenece al usuario autenticado
   if(existeRestaurante.creador.toString() !== req.usuario.id){
    return res.status(401).json({msg: 'No autorizado'});
}
//Crear un objeto con la nueva informacion
const nuevoMenu ={};
if(nombre){
    nuevoMenu.nombre = nombre;
}
if(horarioInicio){
    nuevoMenu.horarioInicio = horarioInicio;
}
if(horarioFin){
    nuevoMenu.horarioFin = horarioFin;
}
if(disponible){
    nuevoMenu.disponible = disponible;
}

//guardar menu 
menu = await Menu.findOneAndUpdate({_id: req.params.id}, nuevoMenu, {
    new: true});
    res.json({menu})
        
    } catch (error) {
        console.timeLog(error);
        res.status(500).send('Hubo un error');

    }
}

//eliminar Menu
exports.eliminarMenu = async (req, res) =>{

    try {
        //Extraer el restaurante y comprobar si existe
  const {restaurante} = req.body;
  const existeRestaurante = await Restaurante.findById(restaurante);

  //Revisar si el menu existe o no
   let menuExiste = await Menu.findById(req.params.id);
   if(!menuExiste){
       return res.status(404).json({msg: "No existe el menu"});
   }
  //Revisar si el restaurante actual pertenece al usuario autenticado
  if(existeRestaurante.creador.toString() !== req.usuario.id){
   return res.status(401).json({msg: 'No autorizado'});
}

//eliminar
await Menu.findByIdAndRemove({_id: req.params.id});
res.json({msg: 'menu eliminado'})
       
   } catch (error) {
       console.timeLog(error);
       res.status(500).send('Hubo un error');

   }

}