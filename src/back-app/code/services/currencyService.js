const FixerIo = require('../modules/fixerIo')

const getAvailableCurrencies = async () => {
    const currencyFromFixer = await FixerIo.getCurrencies()
    return Object.keys(currencyFromFixer).map((key) => {
        return {
            symbol: key,
            description: currencyFromFixer[key]
        }
    })
}

module.exports = {
    getAvailableCurrencies
}