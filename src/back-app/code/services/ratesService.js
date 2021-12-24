const Rate = require('../models');
const Rates = require('../models')
const FixerIo = require('../modules/fixerIo')
const currencyService = require('./currencyService')
const { RateNotFound } = require('./errors')

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

const refreshRate = async (rateId) => {
    const rate = await Rate.findById(rateId)
    if (!rate) {
        throw new RateNotFound(`Rate with ID ${rateId} not found`)
    }

    const newOriginalRate = await FixerIo.getRateBetween(rate.from.symbol, rate.to.symbol)
    const newFeeAmount = (rate.feePercentage / 100) * newOriginalRate
    const newTotal = newFeeAmount + newOriginalRate

    return Rate.findByIdAndUpdate(rateId, 
        { feeAmount: newFeeAmount, originalRate: newOriginalRate, totalRate: newTotal },
        { new: true }
    )
}

const updateRate = async (rateId, newData) => {
    return Rate.findByIdAndUpdate(rateId, newData, { new: true })
        .then(rate => {
            if (!rate) {
                throw new RateNotFound(`Rate with ID ${rateId} does not exist`)
            }

            rate.feeAmount = (rate.feePercentage / 100) * rate.originalRate
            rate.totalRate = rate.feeAmount + rate.originalRate
            return rate.save()
        })
}

module.exports = {
    getRates,
    newRate,
    getOriginalRateBetween,
    refreshRate,
    updateRate
}