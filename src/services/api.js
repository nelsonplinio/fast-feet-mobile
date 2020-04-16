import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18e7b4ba.ngrok.io',
});

export default api;
