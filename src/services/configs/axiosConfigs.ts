import axios from 'axios';

export const api = axios.create({
  withCredentials: false,
  baseURL: 'https://dummyjson.com/',
});
