import axios from 'axios';

const baseAPI = axios.create({ baseURL: 'http://localhost:5000/' });

export const TransportMSG = (email, message) => baseAPI.post('/', {
    email: email,
    message: message
});