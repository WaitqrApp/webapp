const mongoose = require('mongoose');

const OrdenSchema = mongoose.Schema({
    
    total:{
        type: Number,
        required: false,
    },
   
    sesionIndividual:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SesionIndividual'
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

module.exports = mongoose.model('Orden', OrdenSchema)