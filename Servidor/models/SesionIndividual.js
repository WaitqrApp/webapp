const mongoose = require('mongoose');

const SesionIndividualSchema = mongoose.Schema({
    
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
    sesionGeneral:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SesionGeneral'
    }
    
});

module.exports = mongoose.model('SesionIndividual', SesionIndividualSchema)