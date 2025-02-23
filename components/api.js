import axios from 'axios';

const API_KEY = '1a4302761b56f98e3827dc98813e5aae';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`,{ 
      params: { api_key: API_KEY },}
    );
    return response.data.results || [];
  }
  catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

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

export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    return response.data.results || [];
  } 
  catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};


export const fetchPopularTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}`
    );
    console.log('API Response:', response.data);
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const fetchTopRatedTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const fetchOnTheAirTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const fetchAiringTodayTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const searchTVShows = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {  
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};

export const fetchTVShowDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};






export const fetchMedia = async (type) => {
  const response = await axios.get(`${BASE_URL}/${type}/popular?api_key=${API_KEY}`);
  return response.data.results;
}

export const searchMedia = async (query, type) => {
  const response = await axios.get(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
};

export const fetchDetails = async (id, type) => {
  const response = await axios.get(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
  return response.data;
};