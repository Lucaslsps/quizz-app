const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    colcao: {
        type: String,
        required: true
    },
    img_path: {
        type: String,
        required: true
    }
});

const Card = mongoose.model('Cards', CardSchema);

module.exports = Card;