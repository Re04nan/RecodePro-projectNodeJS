const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const buscaCep = require('./src/functions/buscaCep');
const filterMovie = require('./src/functions/filterMovie');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
// Mostrando para o express onde ta minha pasta views
app.set('views', './src/views') // nome da pasta e caminho

// renderizando página principal
app.get('/', (req, res) => {
    // chamando o arquivo da view
    res.render("index")
})
app.get('/filterMovie', async (req, res) =>{
    const {texto} = req.query
    const retorno = await filterMovie(texto)
    res.render("resultadoFilter", {pesquisa: retorno})
})

// pegando dados da minha view
app.post('/envia-cep', async (req, res) =>{
    const {cep} = req.body;
    const resultado = await buscaCep(cep)
    res.render('resultado', {dado: resultado})
})

app.listen(3333);