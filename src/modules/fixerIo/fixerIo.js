const { Axios } = require('axios')
const { fixerConfig } = require('../../config')

const axiosClient = new Axios({
    timeout: 120 * 1000
})

class FixerIo {
    static async getCurrencies() {
        const url = fixerConfig.url + '/symbols'
        const queryParams = '?access_key=' + fixerConfig.accessToken

        return axiosClient.get(url + queryParams)
            .then(response => {
                const responseData = JSON.parse(response.data)
                if (responseData.success) {
                    return responseData.symbols
                }

                return {}
            })
            .catch(error => {
                console.log(error)
                return {}
            })
    }

    static async getLatestRates() {
        const url = fixerConfig.url + '/latest'
        const queryParams = '?access_key=' + fixerConfig.accessToken

        return axiosClient.get(url + queryParams)
            .then(response => {
                const responseData = JSON.parse(response.data)
                if (responseData.success) {
                    return responseData
                }

                return {}
            })
            .catch(error => {
                console.log(error)
                return {}
            })
    }

    static async getRateBetween(currencyFrom, currencyTo) {
        const allRates = await this.getLatestRates()
        if (!allRates.rates[currencyTo]) {
            throw Error('Invalid currency "To"')
        } else if (!allRates.rates[currencyFrom]) {
            throw Error('Invalid currency "From"')
        }

        return Number((allRates.rates[currencyTo] / allRates.rates[currencyFrom]).toFixed(6))
    }
}

module.exports = FixerIo