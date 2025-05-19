import axios from 'axios';

const BASE_URL = 'http://43.200.96.69:8080/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
