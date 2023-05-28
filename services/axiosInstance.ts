// src/services/httpClient.ts
import axios, { AxiosInstance } from 'axios';

const httpClient = (contentType?: string) => {
  const token = localStorage.getItem('accessToken');

  // Create instance
  const instance: AxiosInstance = axios.create({
    baseURL: 'https://abudhabi-malayalees.onrender.com/api/v1',
    headers: {
      'Content-Type': contentType || 'application/json',
    },
    withCredentials: true,
    validateStatus: function (status) {
      return status < 500;
    },
  });

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

export default httpClient;
