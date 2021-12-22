import { Axios } from 'axios';

const axiosClient = new Axios({
    timeout: 120 * 1000
})

const headers = {
    'Content-Type': 'application/json'
}

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

const createRate = async (from, to, feePercentage) => {
    const dataToSend = {from, to, feePercentage}
    console.log(dataToSend)
    return axiosClient
        .post('http://localhost:3000/rates', JSON.stringify(dataToSend), { headers })
        .then(response => {
            if (response.status !== 201) {
                return {success: false, message: JSON.parse(response.data).message}
            }

            return {success: true, message: 'Rate successfully created!'}
        })
}

const availableMethods = {
    getRates,
    getOriginalRateBetween,
    getAvailableCurrencies,
    createRate
}

export default availableMethods;