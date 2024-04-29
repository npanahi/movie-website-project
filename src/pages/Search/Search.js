import { useEffect, useState } from "react";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import api from "../../helpers/baseApi/api";
import { Style } from "./SearchStyle";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";
import { Link } from "react-router-dom";
import MovieCategories from "../../Components/SecondaryComps/MovieCategories/MovieCategories";

export default function SearchPach() {
  const [movie, setMovie] = useState(null);
  const [query, setQuery] = useState("");
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);

  const onChange = function (value) {
    setQuery(value);
  };
  useEffect(() => {
    getSearchMoviesApi();
    getNowPlayingMoviesApi();
  }, [query]);
  async function getSearchMoviesApi() {
    try {
      const res = await api.get("search/movie", {
        params: {
          query: query,
        },
      });
      console.log(query);
      setMovie(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getNowPlayingMoviesApi() {
    try {
      const res = await api.get("movie/now_playing?language=en-US");
      const data = res.data;
      setNowPlayingMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  function renderMovies() {
    if (movie === null || movie === undefined) return "";
    if (movie.results.length === 0)
      return (
        <div className="not-found">
          <h1>No Results</h1>
          <p>
            {`There were no results for ”${query}“ on Apple TV+. Try a new 
            search.`}
          </p>
        </div>
      );
    return (
      <div>
        <h1>Search results</h1>
        <ul className="movies">
          {movie.results.map(({ title, poster_path, id }) => {
            if (poster_path === null) return;
            return (
              <li>
                <Link to={`./../movie/${id}`}>
                  <div className="img-wrapper">
                    <img
                      alt={title}
                      className="shadow"
                      src={`${imgBase.orURL}${poster_path}`}
                    />
                  </div>
                  <h2 className="title">{title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  function renderNowPlayingMovies() {
    if (nowPlayingMovies === null || nowPlayingMovies === undefined) return "";
    return nowPlayingMovies.results.map(({ title, poster_path, id }) => {
      if (poster_path === null) return;
      return (
        <li>
          <Link to={`./../movie/${id}`}>
            <div className="img-wrapper">
              <img
                alt={title}
                className="shadow"
                src={`${imgBase.orURL}${poster_path}`}
              />
            </div>
            <h2 className="title">{title}</h2>
          </Link>
        </li>
      );
    });
  }

  return (
    <Style>
      <PrimaryHeaderFooter onChange={onChange}>
        <div className="container">
          <div className="default">
            {!query && (
              <div>
                <h1>Top resaults</h1>
                <MovieCategories />
                <ul className="now-palying">{renderNowPlayingMovies()} </ul>
              </div>
            )}
          </div>
          {query && <div>{renderMovies()}</div>}
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
