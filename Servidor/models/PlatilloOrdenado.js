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
    }
});

module.exports = mongoose.model('PlatilloOrdenado', PlatilloOrdenadoSchema)