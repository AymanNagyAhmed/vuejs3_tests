import axios from "axios";

axios.defaults.withCredentials = true;

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT;
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers["Content-Type"] = "application/json";
// axios.defaults.headers["Accept-Language"] = "en";
// axios.defaults.headers["X-Language"] = "en";
// axios.defaults.headers["Authorization"] = `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`,

axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        console.log("Axios interceptors: ",error.response.data.message);
        console.log("go to login ");

        // Handle unauthorized error, potentially redirecting to a login page
      }
      return Promise.reject(error);
    }
  );