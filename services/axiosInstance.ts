// src/services/httpClient.ts
import axios, { AxiosInstance } from 'axios';

const httpClient = (contentType?: string) => {
  const token = localStorage.getItem('accessToken');

  // Create instance
  const instance: AxiosInstance = axios.create({
    baseURL: 'https://abudhabi-malayalees.onrender.com/api/v1',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGQ2ZWY5YmFjMmVmMDczZDY0MmZhYyIsInJvbGUiOiJTdXBlckFkbWluIiwiaWF0IjoxNjc4ODA4NTM0LCJleHAiOjE3MTAzNjYxMzQsImF1ZCI6IlNSRUVKSVRIIiwiaXNzIjoiZS1jb21tZXJjZS5nb2t1bHNyZWVqaXRoLmNvbSJ9.PK7X8_j400yYsjMgjPhTPZJ5XZOA2yPR3wkxVS5bprQ'
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
