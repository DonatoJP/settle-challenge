const healthEndpoint = {
    method: 'GET',
    path: '/health',
    handler: (request, h) => {

        return 'OK';
    }
}

const indexEndpoint = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'OK';
    }
}

module.exports = {
    healthEndpoint,
    indexEndpoint
}
