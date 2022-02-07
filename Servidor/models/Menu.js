const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
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
    restaurante:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurante'
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    registro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Menu', MenuSchema)