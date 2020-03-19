const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()


num = 0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  console.log("postado" + num);
  num++;
})

app.listen(process.env.PORT || 3100, function () {
  console.log('Example app listening on port 3000!')
})