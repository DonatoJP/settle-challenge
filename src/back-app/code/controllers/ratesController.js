const ratesService = require('../services/ratesService')
const Joi = require('joi')

const ratesSchema = Joi.alternatives().try(
    Joi.object().keys({
        from: Joi.string().alphanum().min(3).max(3).required(),
        to: Joi.string().alphanum().min(3).max(3).required(),
        feePercentage: Joi.number().min(0.0).required(),
    }),
    Joi.object().keys({
        from: Joi.string().alphanum().min(3).max(3).required(),
        to: Joi.string().alphanum().min(3).max(3).required(),
        feeAmount: Joi.number().min(0.0).required()
    })
)

const originalRatesSchema = Joi.object().required().keys({
    from: Joi.string().required(),
    to: Joi.string().required()
})

const getRates = {
    method: 'GET',
    path: '/rates',
    handler: async (request, h) => {
        return ratesService.getRates();
    }
}

const getOriginalRatesBetween = {
    method: 'GET',
    path: '/rates/originalRates',
    handler: async (request, h) => {
        return ratesService
            .getOriginalRateBetween(request.query.from, request.query.to)
            .then(origRate => (
                {success: true, from: request.query.from, to: request.query.to, originalRate: origRate}
            )).catch(error => (
                {success: false, error: error.message}
            ));
        
    },
    options: {
        validate: {
            query: originalRatesSchema
        }
    }
}

const createRates = {
    method: 'POST',
    path: '/rates',
    handler: async (request, h) => {
        return ratesService
            .newRate(request.payload)
            .then(rate => {
                return h.response(rate).code(201)
            }).catch(err => {
                return h.response({error: true, message: err.message}).code(400)
            });
    },
    options: {
        validate: {
            payload: ratesSchema
        }
    }
}

module.exports = {
    getRates,
    createRates,
    getOriginalRatesBetween
}