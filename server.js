const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 3000;
num = 0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  console.log(req.body);
  console.log('Foram enviados os valores:' + req.body["img1"]);
})

app.listen(PORT, function () {
  console.log(`Servidor ouvindo na porta ${PORT}`);
})