const express = require('express');
const router = express.Router();

// Importando modelo de Card
const Card = require("../models/Card");

// Welcome Page
router.get('/', (req, res) => {

    Card.find({}, {colecao:1}).distinct('colecao',
    function(err, colecao){
        col_escolhida = colecao[Math.floor(Math.random() * colecao.length)];
    }).then(ret =>{
        Card.find({colecao:col_escolhida})
        .then( col_escolhida_valores =>{
            cards_escolhidos = [];

            while(cards_escolhidos.length < 3){
                card_aux = col_escolhida_valores[Math.floor(Math.random() * col_escolhida_valores.length)];
                if(cards_escolhidos.includes(card_aux)){continue;};
                cards_escolhidos.push(card_aux);
            }

            res.render('index.ejs', {cards: cards_escolhidos});
        })
    });
   // res.render('index.ejs');
});

module.exports = router;