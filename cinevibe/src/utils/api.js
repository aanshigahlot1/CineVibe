import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'https://movie-rec-466x.onrender.com';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
});

export const getHomeMovies = (category = 'trending', limit = 24) =>
  api.get('/home', { params: { category, limit } }).then(r => r.data);

export const searchMovies = (query, page = 1) =>
  api.get('/tmdb/search', { params: { query, page } }).then(r => r.data);

export const getMovieDetails = (tmdbId) =>
  api.get(`/movie/id/${tmdbId}`).then(r => r.data);

export const getSearchBundle = (query, tfidfTopN = 12, genreLimit = 12) =>
  api.get('/movie/search', { params: { query, tfidf_top_n: tfidfTopN, genre_limit: genreLimit } }).then(r => r.data);

export const getGenreRecs = (tmdbId, limit = 18) =>
  api.get('/recommend/genre', { params: { tmdb_id: tmdbId, limit } }).then(r => r.data);

export default api;
