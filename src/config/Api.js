import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bitlyclonerefactory.herokuapp.com',
});

export const dataUrl = 'https://bitlyclonerefactory.herokuapp.com/'
