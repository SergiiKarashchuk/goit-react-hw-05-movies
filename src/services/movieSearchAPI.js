import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmVhZjQ1OWJkYzM0ZDczZDRiNTMwMzBhYWQ5NDE3MSIsInN1YiI6IjYzZGJmOWFjMTA5MjMwMDBmMDRkYTgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uC-Z-fFxmbW7fDBPbdS7Pqx5UhdM-U37Tv5InKJMlYc';

export async function getTrendingMovies() {
  const typeRequest = {
    trends: 'trending/movie/week',
  };
  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.trends}`;
  const response = await axios.get(url, options);

  return response.data.results;
}

export async function getSearchMovie(searchQuery = '') {
  const typeRequest = {
    search: 'search/movie',
  };
  const options = {
    params: {
      query: searchQuery,
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.search}`;
  const response = await axios.get(url, options);

  return response.data.results;
}

export async function getMovieDetails(movieId, type = 'details') {
  const typeRequestById = {
    details: `movie/${movieId}`,
    credits: `movie/${movieId}/credits`,
    reviews: `movie/${movieId}/reviews`,
    videos: `movie/${movieId}/videos`,
  };
  const options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequestById[type]}`;
  const response = await axios.get(url, options);

  return response.data;
}
