const currencyService = require('../services/currencyService')

const getAvailableCurrencies = {
    method: 'GET',
    path: '/currencies',
    handler: async (request, h) => {
        return currencyService.getAvailableCurrencies()
            .catch(err => {
                console.log(err)
                return {}
            });
    }
}

module.exports = {
    getAvailableCurrencies
}