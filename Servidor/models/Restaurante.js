const mongoose = require('mongoose');

const RestauranteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: false,
        trim: true,
    },
    telefono:{
        type: Number,
        required: false,
        trim: true
    },
    facebook:{
        type: String,
        required: false,
        trim: true
    },
    instagram:{
        type: String,
        required: false,
        trim: true
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    registro:{
        type: Date,
        default: Date.now()
    },
    capacidad:{
        type: Number,
        required: false,
        trim: true
    }
});

module.exports = mongoose.model('Restaurante', RestauranteSchema)