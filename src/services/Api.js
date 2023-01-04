import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '07f8816ebdb8fd109b409236cc379840';

export const searchMovies = async (query, page) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}&include_adult=false`
  );
  return response.data.results;
};

export const getTrending = async page => {
  const response = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
};

export const getDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const getCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};
export const getReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export function getPosterFilm(posterPath) {
  if (posterPath) return `https://image.tmdb.org/t/p/w300/${posterPath}`;
  return 'https://th.bing.com/th/id/R.d455faed57de093e87bf5e8d443a939d?rik=mcfV46ZrM7B%2b1w&riu=http%3a%2f%2fthemaryastorcollection.com%2fwp-content%2fgallery-bank%2falbum-thumbs%2fo_1a7dsr5bf1hr34nf1csc1eeb124va.jpg&ehk=zJ6vOJ%2fVm98M8P8VHvK9MVr5JhMaIybLNhey7wmTd2c%3d&risl=&pid=ImgRaw&r=0';
}

export function getGenres(genres) {
  if (!genres) {
    return;
  }
  const genresName = genres.map(genre => genre.name);
  return genresName.join(', ');
}
