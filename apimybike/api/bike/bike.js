const restful = require('node-restful')
const mongoose = restful.mongoose

const bikeSchema = new mongoose.Schema({
    Nomelocal: { type: String, required: true },
    HorarioFuncInicial: { type: String, required: true },
    HorarioFuncFinal: { type: String, required: true },
    UrlLojaImagem: { type: String, required: true },
    MarcaModelo: { type: String, required: true },
    Categoria: { type: String, required: true },
    Preco: { type: Number, required: true },
    UrlBikeImagem: { type: String, required: true }
})

module.exports = restful.model('Bike', bikeSchema)