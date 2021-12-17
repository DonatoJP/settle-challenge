'use strict';

const Hapi = require('@hapi/hapi');
const healthController = require('./controllers/healthController')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.route(healthController.healthEndpoint);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();