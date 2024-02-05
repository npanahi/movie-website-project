import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_API_TOKEN,
  },
});

// axios.interceptors.request.use(
//   (config) => {
//     config.headers["Authorization"] = `Bearer ${localStorage.getItem(
//       "access_token"
//     )}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
