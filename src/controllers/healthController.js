const healthEndpoint = {
    method: 'GET',
    path: '/health',
    handler: (request, h) => {

        return 'OK';
    }
}

module.exports = {
    healthEndpoint
}
