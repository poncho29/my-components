import axios from 'axios';

const api = axios.create({
  baseURL: 'https://milk-deliveries.onrender.com/api/v1',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.log('Token inválido o expirado. Realizando logout...');
      }
    }

    return Promise.reject(error);
  }
);

export default api;