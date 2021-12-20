const fs = require('fs')
const path = require('path')

class MockFixerIo {
    static async getCurrencies() {
        const rawData = fs.readFileSync(path.resolve(__dirname, "./mockData/symbols.json"))
        return JSON.parse(rawData)
    }
}

module.exports = MockFixerIo