const pokemonList = require('./../data/pokemon.json');

const indexController = {
    home: (req, res) => {
        res.render('index');
    },
    list: (req, res) => {
        var pokemonType = req.params.id;
        res.render('pokemon', {pokemonList: pokemonList, pokemonType: pokemonType});
    }
}

module.exports = indexController;