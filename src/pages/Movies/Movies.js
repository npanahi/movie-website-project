import { useEffect, useState } from "react";
import api from "../../helpers/baseApi/api";
import { Link, useParams } from "react-router-dom";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import { Style } from "./MoviesStyle";
import { Pagination } from "antd";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [currntPage, setCurentPage] = useState(1);
  // const [metadata, setMetadata] = useState(null);

  // useEffect(() => {
  //   getMoviesApi();
  //   getGenreApi();
  // }, currntPage);

  useEffect(() => {
    getMoviesApi();
    getGenreApi();
  }, [currntPage]);

  async function getMoviesApi() {
    try {
      const res = await api.get(
        `trending/movie/day?language=en-US&page=${currntPage}`
      );
      const data = res.data;
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getGenreApi() {
    try {
      const res = await api.get("genre/movie/list?language=en");
      const data = res.data.genres;
      console.log(data);
      setGenres(data);
    } catch (error) {
      console.log(error);
    }
  }

  function renderGenres(arr) {
    if (genres === null || genres === undefined) return "";
    return genres.map((cur) => {
      if (arr.includes(cur.id)) return <span>{cur.name}. </span>;
    });
  }
  let numMovies = 0;
  const renderMovies = function () {
    if (movies === null || movies === undefined) return "";
    let pageSum = (currntPage - 1) * 20;
    return movies.results.map(
      (
        { overview, name, poster_path, backdrop_path, id, title, genre_ids },
        i
      ) => {
        numMovies++;
        return (
          <li key={id}>
            <div className="img-wrapper">
              <Link to={`./${id}`}>
                <img
                  alt={title}
                  className="shadow "
                  src={`${imgBase.orURL}${poster_path}`}
                />
                <div className="icon-wrapper">
                  <FontAwesomeIcon className="play-icon" icon={faPlay} />
                </div>
              </Link>
            </div>
            <div className="text-wrapper flex-x align-center gap-20">
              <div className="num">{numMovies + pageSum}</div>
              <div className="main-text">
                <Link to={`./${id}`}>
                  <h2 className="title ">{title}</h2>
                </Link>
                <div className="genres">{renderGenres(genre_ids)}</div>
              </div>
            </div>
          </li>
        );
      }
    );
  };
  const onChange = (page, pageSize) => {
    setCurentPage(page);
  };
  if (movies === null || movies === undefined) return "";
  return (
    <Style>
      <PrimaryHeaderFooter>
        {/* {movies !== null ? <HPHero movies={movies} genres={genres} /> : ""} */}
        <div className="container ">
          <div className="movies-wrapper">
            <h1>Movies</h1>
            <ul className="movies">{renderMovies()}</ul>
            <div className="pagination center-text m-y-40">
              <Pagination
                defaultCurrent={1}
                total={movies.total_pages}
                onChange={onChange}
                showSizeChanger={false}
                pageSize={20}
              />
            </div>
          </div>
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
