const fs = require('fs')
const path = require('path')
const FixerIo = require('./fixerIo')

class MockFixerIo extends FixerIo {
    static async getCurrencies() {
        const rawData = fs.readFileSync(path.resolve(__dirname, "./mockData/symbols.json"))
        return JSON.parse(rawData)
    }

    static async getLatestRates() {
        const rawData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./mockData/rates.json")));
        rawData.timestamp = Math.floor(Date.now() / 1000);
        rawData.date = (new Date()).toISOString().split('T')[0];
        for (const key of Object.keys(rawData.rates)) {
            rawData.rates[key] = Number((rawData.rates[key] * (Math.random() * (1.1 - 0.9) + 0.9)).toFixed(6));
        }

        return rawData;
    }
}

module.exports = MockFixerIo