import axios from 'axios';

const api = axios.create({
    baseURL: 'http://vscode.cloudns.asia:3000'
});

export default api;