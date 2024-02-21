import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzVmNTVlNmJmMjhhMjY3MGNkNDE2YTU5YWUwZDFkNSIsInN1YiI6IjY1YjRmNDRkMWM2MzViMDE2MjEyZWYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o0i6va-Xq17rSG5sUy4lU-LWkI3i6JdRJsCdVrEl25s",
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
