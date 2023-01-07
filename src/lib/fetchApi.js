import axios from "axios";

const request = (method) => {
    return async (endpoint, body) => {
        const response = await requestApi({ method, endpoint, body})

        return response
    }
}

const requestApi = async ({ method, endpoint, data }) => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL
    axios.defaults.headers['Content-Type'] = 'application/json'

    let response = {}
    
    switch (method) {   
        case 'GET':
            response = await axios.get(endpoint).catch(handleError)
            break;
        default:
            response = await axios.get(endpoint).catch(handleError)
            break;
    }

    return response.data
}

const handleError = (error) => {
    let message = 'Not Found'

    if (error.response) {
        message = error.response?.data || 'Not Found'
    }

    return Promise.reject(message)
}

const fetchApi = {
    get: request('GET'),
}

export default fetchApi