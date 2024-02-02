import { useEffect, useState } from "react";
import api from "../../../helpers/baseApi/api";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import { Style } from "./MovieListStyle";

export default function MovieList({ className }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getApi();
  }, []);
  async function getApi() {
    try {
      const res = await api.get(
        "discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200"
      );

      setMovies(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  function renderFarm() {
    if (movies === null) return "";
    return movies.results
      .slice(1, 6)
      .map(({ overview, name, poster_path, backdrop_path, id }, i) => {
        return (
          <li className="col-5">
            <div className="img-wrapper">
              {/* <img className="test" src={`${imgBase.orURL}${poster_path}`} /> */}
              <img className="test" src={`${imgBase.wURL}${backdrop_path}`} />
            </div>
            <div className="text-wrapper">
              {/* <h1>{i + 1}</h1> */}
              {/* <div>{overview}</div> */}
              <h2>{name}</h2>
            </div>
            {/* <img src={`${imgBase.wURL}${backdrop_path}`} /> */}
          </li>
        );
      });
  }

  return (
    <Style className={`container ${className}`}>
      <div className="container">
        <ul>{renderFarm()}</ul>
      </div>
    </Style>
  );
}
