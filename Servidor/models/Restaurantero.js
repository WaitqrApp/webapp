const mongoose = require('mongoose');

const RestauranteroSchema = mongoose.Schema({
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
    password:{
        type: String,
        required: true,
        trim: true
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

module.exports = mongoose.model('Restaurantero', RestauranteroSchema)