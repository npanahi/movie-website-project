import { useEffect, useState } from "react";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import api from "../../helpers/baseApi/api";
import { Style } from "./SearchStyle";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";
import { Link } from "react-router-dom";
import MovieCategories from "../../Components/SecondaryComps/MovieCategories/MovieCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, createSearchParams } from "react-router-dom";
export default function SearchPach() {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);

  const onChange = function (value) {
    setQuery(value);
    setSearchParams(createSearchParams({ q: value }));
  };
  useEffect(() => {
    getSearchMoviesApi();
    getNowPlayingMoviesApi();
  }, [query]);
  async function getSearchMoviesApi() {
    console.log(searchParams.get("q"));

    try {
      const res = await api.get("search/movie", {
        params: {
          query: searchParams.get("q"),
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
                    <div className="icon-wrapper">
                      <FontAwesomeIcon className="play-icon" icon={faPlay} />
                    </div>
                  </div>
                  <div className="title">{title}</div>
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
              <div className="icon-wrapper">
                <FontAwesomeIcon className="play-icon" icon={faPlay} />
              </div>
            </div>
          </Link>
        </li>
      );
    });
  }

  return (
    <Style>
      <PrimaryHeaderFooter onChange={onChange} query={query}>
        <div className="container">
          <div className="default">
            {!searchParams.get("q") && (
              <div>
                <h1>Explore Popular Series, Films, and More</h1>
                <MovieCategories />
                <ul className="now-palying">{renderNowPlayingMovies()} </ul>
              </div>
            )}
          </div>
          {searchParams.get("q") && <ul>{renderMovies()}</ul>}
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
