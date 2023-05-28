// src/services/httpClient.ts
import axios, { AxiosInstance } from 'axios';

const httpClient = (contentType?: string) => {
  // Create instance
  const instance: AxiosInstance = axios.create({
    baseURL: 'https://abudhabi-malayalees.onrender.com/api/v1',
    headers: {
      'Content-Type': contentType || 'application/json', // Set the Content-Type header
    },
    withCredentials: true,
    validateStatus: function (status) {
      return status < 500;
    },
  });

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken'); // Retrieve the token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Set the Authorization header with the token
    }
    return config;
  });

  return instance;
};

export default httpClient;
