const fetch = require('node-fetch');

module.exports = async function filterMovie(texto){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=57e70ef3c0bd368cd738d08b7e901f63&language=pt-BR&query=${texto}&page=12`);
    const json = res.json();

    return json;
}