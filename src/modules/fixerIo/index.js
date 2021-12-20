const config = require('../../config')

let fixerIoClass
if (config.useFakes) {
    fixerIoClass = require('./mockFixerIo')
} else {
    fixerIoClass = require('./fixerIo')
}

module.exports = fixerIoClass