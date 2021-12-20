'use strict';

const Hapi = require('@hapi/hapi');
const { requestLogging } = require('./utils/ioLogging');

const healthController = require('./controllers/healthController');
const ratesController = require('./controllers/ratesController');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.ext('onRequest', requestLogging);

    server.route(healthController.healthEndpoint);
    server.route(ratesController.getRates);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();