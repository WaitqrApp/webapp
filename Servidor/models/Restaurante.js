const mongoose = require('mongoose');

const RestauranteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telefono:{
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    facebook:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    Instagram:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    registro:{
        type: Date,
        default: Date.now()
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
});

module.exports = mongoose.model('Restaurante', RestauranteSchema)