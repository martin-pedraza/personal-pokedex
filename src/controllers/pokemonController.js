const pokemonList = require('./../data/pokemon.json');

const pokemonController = {
    pokemon: (req, res) => {
        res.render('pokemon', {pokemonList});
    }
}

module.exports = pokemonController;