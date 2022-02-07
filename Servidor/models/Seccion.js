const mongoose = require('mongoose');

const SeccionSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    horarioInicio:{
        hour: Number,
        minute: Number,
        required: false,
    },
    horarioFin:{
        hour: Number,
        minute: Number,
        required: false,
    },
    disponible:{
        type: Boolean,
        default: true,
    },
    menu:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    restaurante:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurante'
    },
    registro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Seccion', SeccionSchema)