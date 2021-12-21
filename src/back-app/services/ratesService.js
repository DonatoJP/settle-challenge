const Rate = require('../models');
const Rates = require('../models')
const FixerIo = require('../modules/fixerIo')
const currencyService = require('./currencyService')

const getRates = async () => {
    return Rates.find({});
}

const newRate = async (rateDTO) => {
    const originalRate = await FixerIo.getRateBetween(rateDTO.from, rateDTO.to);
    const currenciesData = await currencyService.getAvailableCurrencies();
    const from = currenciesData.find(e => e.symbol === rateDTO.from);
    const to = currenciesData.find(e => e.symbol === rateDTO.to);
    const newRate = {from, to, originalRate}

    if (rateDTO.feePercentage) {
        newRate.feePercentage = rateDTO.feePercentage;
        newRate.feeAmount = (rateDTO.feePercentage / 100) * newRate.originalRate;
    } else {
        newRate.feeAmount = rateDTO.feeAmount;
        newRate.feePercentage = (newRate.feeAmount / newRate.originalRate) * 100;
    }
    
    newRate.totalRate = newRate.feeAmount + newRate.originalRate;

    return Rate.create(newRate);
}

const getOriginalRateBetween = async (from, to) => {
    return FixerIo.getRateBetween(from, to)
}

module.exports = {
    getRates,
    newRate,
    getOriginalRateBetween
}