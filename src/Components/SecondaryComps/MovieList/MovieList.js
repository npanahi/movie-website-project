import { useEffect, useState } from "react";
import api from "../../../helpers/baseApi/api";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import { Style } from "./MovieListStyle";
import { Link } from "react-router-dom";

export default function MovieList({ className }) {
  const [movies, setMovies] = useState(null);
  const [deposit, setDeposit] = useState(0);
  useEffect(() => {
    buildUI();
    a();
    // setMovies(newMovies);
    // setDeposit(calcDeposit(newMovies));
  }, []);

  async function getApi() {
    try {
      const res = await api.get(
        "trending/movie/day?language=en-US"
        // "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&size=1"
      );
      // setMovies(res.data);
      // setDeposit(calcDeposit(res.data));
      // console.log(res.data);
      const data = res.data;
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function buildUI() {
    let newMovies = await getApi();
    if (newMovies !== undefined) {
      setMovies(newMovies);
      setDeposit(calcDeposit(newMovies));
    }
  }
  function calcDeposit(movies) {
    if (movies === null) return "";
    return movies.results
      .flatMap(({ id }) => id)
      .reduce((acc, cur) => acc + cur, 0);
  }
  function renderFarm() {
    if (movies === null) return "";
    if (movies === undefined) return "";
    console.log(movies);
    return movies.results
      .slice(6, 11)
      .map(({ overview, name, poster_path, backdrop_path, id, title }, i) => {
        return (
          <li className="col-5">
            <div className="img-wrapper">
              {/* <img className="test" src={`${imgBase.orURL}${poster_path}`} /> */}
              <img className="test" src={`${imgBase.orURL}${backdrop_path}`} />
            </div>
            <div className="text-wrapper">
              <h1>{i + 1}</h1>
              {/* <div>{overview}</div> */}
              <Link to={`movie/${id}`}>
                <h2>{name || title}</h2>
              </Link>
            </div>
            {/* <img src={`${imgBase.wURL}${backdrop_path}`} /> */}
          </li>
        );
      });
  }
  function a() {
    const element = document.querySelectorAll("h1");
    console.log(`kjhxdcfgvhbjklm,;///////////////////////////////////`);
    element.forEach((cur) => {
      function back() {
        cur.style.backgroundColor = "blue";
      }
      cur.addEventListener("click", back);
    });
  }
  return (
    <Style className={`movie-list ${className}`}>
      <h1 className="kh">
        <div>{deposit}</div>
      </h1>
      <h1 className="kh">
        <div>{deposit}</div>
      </h1>{" "}
      <h1 className="kh">
        <div>{deposit}</div>
      </h1>
      <div className="container">
        <ul>{renderFarm()}</ul>
      </div>
    </Style>
  );
}
