const ratesService = require('../services/ratesService')

const getRates = {
    method: 'GET',
    path: '/rates',
    handler: async (request, h) => {
        return ratesService.getRates();
    }
}

module.exports = {
    getRates
}