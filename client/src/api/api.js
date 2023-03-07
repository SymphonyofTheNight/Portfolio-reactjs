import axios from 'axios';

const baseAPI = axios.create({ baseURL: '/' });

export const TransportMSG = (email, message) => baseAPI.post('/', {
    email: email,
    msg: message
});