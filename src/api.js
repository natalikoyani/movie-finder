import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '16d168f707f6ea30309ca4c94be54a91';

export const fetchTrending = async () => {
    try {
        const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error(error.message);
    }
}

export const fetchMovieById = async (id) => {
    try {
        const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

export const fetchCast = async (id) => {
    try {
        const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
        return response.data.cast;
    } catch (error) {
        console.error(error.message);
    }
}

export const fetchReviews = async (id) => {
    try {
        const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error(error.message);
    }
}

export const fetchMovies = async (query) => {
    try {
        const response = await axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error(error.message);
    }
}