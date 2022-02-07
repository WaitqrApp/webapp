const mongoose = require('mongoose');

const SesionIndividualSchema = mongoose.Schema({
    
    horarioInicio:{
        type: String,
        required: false,
    },
    horarioFin:{
        type: String,
        required: false,
    },
    sesionGeneral:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SesionGeneral'
    },
    restaurante:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurante'
    },
    
});

module.exports = mongoose.model('SesionIndividual', SesionIndividualSchema)