class RateNotFound extends Error {
    constructor(message) {
        super(message)
        this.name = 'RateNotFound'
    }
}

module.exports = {
    RateNotFound
}