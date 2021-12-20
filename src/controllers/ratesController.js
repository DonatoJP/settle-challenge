const ratesService = require('../services/ratesService')
const Joi = require('joi')

const ratesSchema = Joi.alternatives().try(
    Joi.object().keys({
        from: Joi.string().alphanum().min(3).max(3).required(),
        to: Joi.string().alphanum().min(3).max(3).required(),
        feePercentage: Joi.number().min(0.0).max(100.0).required(),
    }),
    Joi.object().keys({
        from: Joi.string().alphanum().min(3).max(3).required(),
        to: Joi.string().alphanum().min(3).max(3).required(),
        feeAmount: Joi.number().min(0.0).required()
    })
)


const getRates = {
    method: 'GET',
    path: '/rates',
    handler: async (request, h) => {
        return ratesService.getRates();
    }
}

const createRates = {
    method: 'POST',
    path: '/rates',
    handler: async (request, h) => {
        return ratesService.newRate(request.payload);
    },
    options: {
        validate: {
            payload: ratesSchema
        }
    }
}

module.exports = {
    getRates,
    createRates
}