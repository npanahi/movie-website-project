import { useEffect, useState } from "react";
import api from "../../helpers/baseApi/api";
import { Link, useParams } from "react-router-dom";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import { Style } from "./MoviesStyle";
import HPHero from "../../Components/SecondaryComps/HomePageHero/HPHero";
import { Pagination } from "antd";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";

export default function MoviesPage() {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [currntPage, setCurentPage] = useState(1);
  const [metadata, setMetadata] = useState(null);

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
      // console.log(data);
      setGenres(data);
    } catch (error) {
      console.log(error);
    }
  }

  const renderMovies = function () {
    if (movies === null || movies === undefined) return "";
    return movies.results.map(
      (
        { overview, name, poster_path, backdrop_path, id, title, genre_ids },
        i
      ) => {
        return (
          <li>
            <div className="img-wrapper">
              <Link to={`./${id}`}>
                <img
                  className="shadow "
                  src={`${imgBase.orURL}${poster_path}`}
                />
                <h2 className="title m-y-20">{title}</h2>
              </Link>
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
