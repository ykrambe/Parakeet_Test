// utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://parakeet-test-backend.ykrambe.workers.dev', // Ganti dengan URL yang Anda inginkan
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
  