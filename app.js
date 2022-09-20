var express = require('express');
var path = require('path');
const port = process.env.PORT || 3006;

var indexRoute = require('./src/routes/indexRoute');
var pokemonRoute = require('./src/routes/pokemonRoute');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/pokemon', pokemonRoute);

app.use( (req, res, next) => {
  res.status(404).render('error');
})

app.listen(port, () => console.log('Server is running in port', port));