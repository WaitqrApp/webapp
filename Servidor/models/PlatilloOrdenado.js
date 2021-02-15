const mongoose = require('mongoose');

const PlatilloOrdenadoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
    },
    comentario:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true,
    },
   
    sesionIndividual:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SesionIndividual'
    },
    platillo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Platillo'
    },
    registro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('PlatilloOrdenado', PlatilloOrdenadoSchema)