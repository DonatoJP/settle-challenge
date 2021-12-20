const { Axios } = require('axios')
const { fixerConfig } = require('../../config')

const axiosClient = new Axios({
    timeout: 120 * 1000
})

console.log(fixerConfig)

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
}

module.exports = FixerIo