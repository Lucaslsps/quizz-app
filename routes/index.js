const express = require('express');
const router = express.Router();

// Importando modelo de Card
const Card = require("../models/Card");

// Welcome Page
router.get('/', (req, res) => {
/*
    const get_card_collection = (value) => {
        return Card.find({}, {colecao:1}).distinct('colecao').exec();
    }

    card_collection = async =>{
        const collection = await get_card_collection("");
        console.log(collection);
    }*/

    Card
    .find({}, {colecao:1})
    .distinct('colecao', function(err, colecao){
        col_escolhida = colecao[Math.floor(Math.random() * colecao.length)];
        //console.log("Primeira func" + col_escolhida);
    })
    .then(ret =>{
        Card
        .find({colecao:col_escolhida})
        .then( col_escolhida_valores =>{
            //console.log("valores escolhidos" + col_escolhida_valores);
            //console.log("Segunda func" + col_escolhida);
            cards_escolhidos = [];

            while(cards_escolhidos.length < 3){
                card_aux = col_escolhida_valores[Math.floor(Math.random() * col_escolhida_valores.length)];
                if(cards_escolhidos.includes(card_aux)){continue;};
                cards_escolhidos.push(card_aux);
            }
            //console.log("Sendo mandado" + cards_escolhidos + col_escolhida);
            res.render('index.ejs', {cards: cards_escolhidos, colecao: col_escolhida});
        })
    });
});

module.exports = router;