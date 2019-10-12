import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://typescript-yelpcamp-api.herokuapp.com/',
});

export default instance;
