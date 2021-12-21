import { Axios } from 'axios';

const axiosClient = new Axios({
    timeout: 120 * 1000
})

const getRates = async () => {
    return axiosClient
        .get("http://localhost:3000/rates")
        .then(response => {
            if (response.status === 200) {
                return JSON.parse(response.data)
            }

            return []
        })
}

const getOriginalRateBetween = async (from, to) => {
    return axiosClient
        .get(`http://localhost:3000/rates/originalRates?from=${from}&to=${to}`)
        .then(response => {
            if (response.status === 200) {
                return (JSON.parse(response.data)).originalRate
            } else if (response.status === 404) {
                return null
            }

            throw Error('Invalid input')
        })
}

const getAvailableCurrencies = async () => {
    return axiosClient
        .get('http://localhost:3000/currencies')
        .then(response => {
            if (response.status === 200) {
                return (JSON.parse(response.data))
            }

            return []
        })
}

const availableMethods = {
    getRates,
    getOriginalRateBetween,
    getAvailableCurrencies
}

export default availableMethods;