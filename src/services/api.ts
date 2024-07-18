// Can be used for custom configurations, optional if using 'createApi'.
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default api
