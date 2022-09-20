var express = require('express');
var router = express.Router();
const pokemonController = require('./../controllers/pokemonController');

/* GET users listing. */
router.get('/', pokemonController.pokemon);

module.exports = router;
