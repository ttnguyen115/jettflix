import axios from 'axios';
import { genres } from '../constants/genres'; 

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '7fa176dd1429d29e6ed30fbbaf45b42a',
      language: 'en-US',
    },
});

export function findGenreId(genreName) {
    return Object
      .values(genres)
      .find((genre) => genre.name.toUpperCase() === String(genreName).toUpperCase())
      .id;
}
  
export function findGenreName(genreId) {
    return Object
      .values(genres)
      .find((genre) => genre.id === Number(genreId))
      .name;
}