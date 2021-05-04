import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '7fa176dd1429d29e6ed30fbbaf45b42a',
    },
});