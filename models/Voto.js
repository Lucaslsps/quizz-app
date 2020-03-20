const mongoose = require('mongoose');
const VotoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    voto1: {
        type: Number,
        required: true
    },
    voto2: {
        type: Number,
        required: true
    },
    voto3: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Voto = mongoose.model('Voto,', VotoSchema);

module.exports = Voto;