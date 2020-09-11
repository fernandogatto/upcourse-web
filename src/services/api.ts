import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apitestesv1.azurewebsites.net/api',
});

export default api;
