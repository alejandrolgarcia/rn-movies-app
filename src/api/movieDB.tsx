import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '44cd50d100ebb392e1a12b01c68ace98',
        language: 'es-ES'
    }
});

export default movieDB;