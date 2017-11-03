const Bike= require('./bike')

var request = require('request-promise');




Bike.methods(['get', 'post', 'put', 'delete'])
Bike.updateOptions({new: true, runValidators: true})

//Integracao com api trillhas
request({
    url: 'http://localhost:3000/api/v1/trilhas/', 
    qs: {categoria: 'Speed'}, //Query 
    method: 'GET', 
    headers: { 
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    },
    body: 'Conteudo do body' 
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});

Bike.before('post', function (req, res, next) { hasUsuario(req, res, next); });
Bike.before('put', function (req, res, next) { hasUsuario(req, res, next); });



module.exports = Bike