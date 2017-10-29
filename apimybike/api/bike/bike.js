const restful = require('node-restful')
const mongoose = restful.mongoose

const bikeSchema = new mongoose.Schema({
    Nomelocal: { type: Number, required: true },
    HorarioFuncInicial: { type: Number, required: true },
    HorarioFuncFinal: { type: Number, required: true },
    UrlLojaImagem: { type: Number, required: true },
    MarcaModelo: { type: Number, required: true },
    Categoria: { type: Number, required: true },
    Preco: { type: Number, required: true },
    UrlBikeImagem: { type: Number, required: true }
})

module.exports = restful.model('Bike', bikeSchema)