const Bike= require('./bike')

Bike.methods(['get', 'post', 'put', 'delete'])
Bike.updateOptions({new: true, runValidators: true})

module.exports = Bike