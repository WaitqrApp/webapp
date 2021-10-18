const mongoose = require('mongoose');

const PlatilloOrdenadoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: false,
        trim: true
    },
    precio:{
        type: Number,
        required: false,
    },
    cantidad:{
        type: Number,
        required: false,
    },
    comentario:{
        type: String,
        required: false
    },
    platillo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Platillo'
    },
    orden:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orden'
    },
    registro:{
        type: Date,
        default: Date.now()
    },
    restaurante:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurante'
    } ,
    sesionIndividual:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SesionIndividual'
    },
    sesionGeneral:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SesionGeneral'
    },
    mesa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesa'
    },
});

module.exports = mongoose.model('PlatilloOrdenado', PlatilloOrdenadoSchema)