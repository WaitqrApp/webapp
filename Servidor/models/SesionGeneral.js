const mongoose = require('mongoose');

const SesionGeneralSchema = mongoose.Schema({
    
    horarioInicio:{
        type: String,
        required: false,
    },
    horarioFin:{
        type: String,
        required: false,
    },
    mesa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesa'
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

module.exports = mongoose.model('SesionGeneral', SesionGeneralSchema)