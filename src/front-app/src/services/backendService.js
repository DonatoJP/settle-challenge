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

const availableMethods = {
    getRates
}

export default availableMethods;