import axios from 'axios';

axios.defaults.withCredentials = true;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000';
}
