// Packages necessários
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();


// Porta onde o servidor está ouvindo, local:3000, hospedado: port do host
const PORT = process.env.PORT || 3000;

// Chamando os packages
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));


// DB Config
const db = require('./config/keys').MongoURI;

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

//Modelo de voto
const Voto = require('./models/Voto');
const Card = require('./models/Card');

//Rota
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users'));

/*app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})*/

app.post('/', function (req, res) {
  const nome_value = req.body["nome"];
  const voto1_value = req.body["voto1"];
  const voto2_value = req.body["voto2"];
  const voto3_value = req.body["voto3"];

  Voto.findOne({ nome:nome_value, voto1:voto1_value, voto2:voto2_value, voto3: voto3_value})
  .then(voto =>{
    if(voto){

    }else{
      const newVoto = new Voto({
        nome:nome_value,
        voto1:voto1_value,
        voto2:voto2_value,
        voto3:voto3_value
      });
      newVoto.save()
      .then()
      .catch(err => console.log(err));
    }
  });
})

app.listen(PORT, function () {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});

module.exports = router;