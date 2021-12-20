const Rates = require('../models')

const getRates = async () => {
    return Rates.find({})
}

module.exports = {
    getRates
}