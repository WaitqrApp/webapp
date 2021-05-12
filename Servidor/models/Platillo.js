const mongoose = require('mongoose');

const PlatilloSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
    },
    descripcion:{
        type: String,
        required: true
    },
    disponible:{
        type: Boolean,
        default: true,
    },
   
    seccion:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seccion'
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    registro:{
        type: Date,
        default: Date.now()
    },
    imagenPlatillo:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Platillo', PlatilloSchema)