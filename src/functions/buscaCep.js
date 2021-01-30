const fetch = require('node-fetch');

module.exports = async function buscaCep(cep){
    //https://viacep.com.br/ws/02976230/json/
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();

    return json;
}
