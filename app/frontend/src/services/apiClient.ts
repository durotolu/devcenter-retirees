import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your backend URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
