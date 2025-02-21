import axios from 'axios';

const API_KEY = '1a4302761b56f98e3827dc98813e5aae';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: { api_key: API_KEY },
    });

    console.log('API Response:', response.data); // 
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    return [];
  }
};



export const PopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results || [];
  }
  catch (error) {
    console.error('API Error:', error);
    return [];
  }
};


export const fetchTVShows = async (endpoint) => {
  const response = await axios.get(`${BASE_URL}/tv/${endpoint}?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMedia = async (query, type) => {
  const response = await axios.get(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
};

export const fetchDetails = async (id, type) => {
  const response = await axios.get(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
  return response.data;
};