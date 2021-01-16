const mongoose = require('mongoose');

const MesaSchema = mongoose.Schema({
    numero:{
        type: String,
        required: true,
        trim: true
    },
    disponible:{
        type: Boolean,
        default: true,
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

module.exports = mongoose.model('Mesa', MesaSchema)