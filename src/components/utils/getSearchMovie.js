import axios from 'axios';
import { toast } from 'react-hot-toast';

const API_KEY = '011d08b19d0a6cd1659a08ce1a816c37';

export async function searchMovies(query) {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        api_key: API_KEY,
        query: query,
      },
    };

    const response = await axios(options);
    const data = response.data;
    return data;
  } catch (error) {
    toast.error('Oops! Looks like something went completely wrong! No worries, try again later.');
    throw error;
  }
}

export default searchMovies;