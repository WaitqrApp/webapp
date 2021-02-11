const mongoose = require('mongoose');

const SesionGeneralSchema = mongoose.Schema({
    
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
    mesa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesa'
    },
    registro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('SesionGeneral', SesionGeneralSchema)