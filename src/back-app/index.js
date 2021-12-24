'use strict';

const Hapi = require('@hapi/hapi');
const { requestLogging } = require('./code/utils/ioLogging');

const healthController = require('./code/controllers/healthController');
const ratesController = require('./code/controllers/ratesController');
const currencyController = require('./code/controllers/currencyController');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0',
        routes: {
            cors: true
        }
    });

    server.ext('onRequest', requestLogging);

    server.route(healthController.healthEndpoint);
    server.route(healthController.indexEndpoint);

    server.route(ratesController.getRates);
    server.route(ratesController.createRates);
    server.route(ratesController.getOriginalRatesBetween);
    server.route(ratesController.refreshRates);
    server.route(ratesController.updateRates);

    server.route(currencyController.getAvailableCurrencies);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();