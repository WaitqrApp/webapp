const mongoose = require("mongoose");

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
    default: Date.now(),
  },
  restaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurante",
  },
  mesa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurante",
  },
  finalizado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Orden", OrdenSchema);
