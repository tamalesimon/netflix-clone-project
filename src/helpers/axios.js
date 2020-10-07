import axios from 'axios';

/**
 * Create an Axios api with defaults
 */
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance;