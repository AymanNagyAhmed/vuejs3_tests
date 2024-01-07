
axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept-Language'] = 'en'
axios.defaults.headers['X-Language'] = 'en'

