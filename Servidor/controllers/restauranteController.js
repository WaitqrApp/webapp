const Restaurante = require('../models/Restaurante');
const {validationResult} = require('express-validator')


exports.crearRestaurante = async (req, res) =>{


    //Revisar si hay errores
    const errores = validationResult(req);
        if(!errores.isEmpty()){
            return res.status(400).json({errores: errores.array()})
        }

    try{
        //Crear un nuevo restaurante
        const restaurante = new Restaurante(req.body);

        //Guardar el creador via JWT 
        restaurante.creador = req.usuario.id;

        //guardar el proyecto
        restaurante.save();
        res.json(restaurante)
        
    }
    catch(error){
        console.log(error);
        res.status(500).send("Hubo un error")
    }

}

//Obtiene todos los restaurantes
exports.obtenerRestaurante = async (req, res) =>{
    try {
        //para ver todos
        //const restaurantes = await Restaurante.find();
        //para ver solo los creados por un usuario
        const restaurantes = await Restaurante.find({ creador: req.usuario.id}).sort({registro: -1});

        res.json({restaurantes});
    } catch (error) {
        
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}
//Obtiene un restaurante
exports.obtenerUnRestaurante = async (req, res) =>{
    try {
        //Extraer la sesion general y comprobar si existe
        const {restaurante} = req.query;
        const restaurantes = await Restaurante.findById(restaurante);

        res.json({restaurantes});
    } catch (error) {
        
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

//Actualiza un restaurante
exports.actualizarRestaurante = async (req, res) =>{
    
    //Revisar si hay errores
    const errores = validationResult(req);
        if(!errores.isEmpty()){
            return res.status(400).json({errores: errores.array()})
        }

        //extraer la informacion del proyecto
        const{nombre, email, telefono, facebook, instagram} = req.body;
        const nuevoRestaurante = {};

        if(nombre){
            nuevoRestaurante.nombre = nombre;
        }
        if(email){
            nuevoRestaurante.email = email;
        }
        if(telefono){
            nuevoRestaurante.telefono = telefono;
        }
        if(facebook){
            nuevoRestaurante.facebook = facebook;
        }
        if(instagram){
            nuevoRestaurante.instagram = instagram;
        }
        try {
            //Revisar el ID
            //console.log(req.params.id);
            let restaurante = await Restaurante.findById(req.params.id);

            //si el restaurante existe o no
            if(!restaurante){
                return res.status(404).json({ msg: 'restaurante no encontrado'})
            }

            //verificar el creador del restaurante
            if(restaurante.creador.toString() !== req.usuario.id){
                return res.status(401).json({msg: 'No autorizado'});
            }

            //actualizar
            restaurante = await Restaurante.findByIdAndUpdate({_id: req.params.id}, {$set: nuevoRestaurante},{new: true});
            res.json({restaurante});
            
        } catch (error) {
            console.log(error)
            res.status(500).send('Error en el servidor')
        }
}

//Elimina un restaurante por su id
exports.eliminarRestaurante = async (req, res) =>{
    try {
        
            //Revisar el ID
            //console.log(req.params.id);
            let restaurante = await Restaurante.findById(req.params.id);

            //si el restaurante existe o no
            if(!restaurante){
                return res.status(404).json({ msg: 'restaurante no encontrado'})
            }

            //verificar 
            if(restaurante.creador.toString() !== req.usuario.id){
                return res.status(401).json({msg: 'No autorizado'});
            }

            //Elimnar el Proyecto
            await Restaurante.findOneAndRemove({_id: req.params.id});
            res.json({msg: 'Restaurante eliminado'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Error en el servidor')
    }
}

