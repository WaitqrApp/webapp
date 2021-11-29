const mongoose = require("mongoose");

const moment = require('moment-timezone');
const dateMexico = moment.tz("America/Mexico_City").format();

const OrdenSchema = mongoose.Schema({
  total: {
    type: Number,
    required: false,
  },
  sesionIndividual: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SesionIndividual",
  },
  sesionGeneral: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SesionGeneral",
  },
  registro: {
    type: Date,
    default: dateMexico,
  },
  restaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurante",
  },
  mesa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mesa",
  },
  mesaNombre: {
    type: String,
    required: false,
  },
  finalizado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Orden", OrdenSchema);
