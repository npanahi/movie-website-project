import { useEffect, useState } from "react";
import api from "../../../helpers/baseApi/api";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import { Style } from "./MovieListStyle";
import { Link } from "react-router-dom";
import Slider, { goToSlide } from "../../../helpers/slider/slider";

export default function MovieList({ className }) {
  const [movies, setMovies] = useState(null);
  const [genres, setGenre] = useState(null);
  useEffect(() => {
    buildUI();
  }, []);

  async function getMoviesApi() {
    try {
      const res = await api.get("trending/movie/day?language=en-US");
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function getGenreApi() {
    try {
      const res = await api.get("genre/movie/list?language=en");
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function buildUI() {
    let newGenres = await getGenreApi();
    if (newGenres !== undefined) {
      console.log(newGenres);
      setGenre(newGenres.genres);
    }
    let newMovies = await getMoviesApi();
    if (newMovies !== undefined) {
      console.log(newMovies);
      setMovies(newMovies);
    }
  }

  // function calcDeposit(movies) {
  //   if (movies === null) return "";
  //   return movies.results
  //     .flatMap(({ id }) => id)
  //     .reduce((acc, cur) => acc + cur, 0);
  // }
  function renderGenres(arr) {
    return genres.map((cur) => {
      if (arr.includes(cur.id)) return <span>{cur.name} </span>;
    });
    // {genres.map((cur) => {
    //   if (genre_ids.includes(cur.id))
    //     return <div>{cur.name}</div>;
    // })}
  }
  // function generateSlides() {
  //   return movies.results.map(
  //     (
  //       { overview, name, poster_path, backdrop_path, id, title, genre_ids },
  //       i
  //     ) => {
  //       return (
  //         <li className="col-5">
  //           <div className="img-wrapper">
  //             {/* <img className="test" src={`${imgBase.orURL}${poster_path}`} /> */}
  //             <img className="test" src={`${imgBase.orURL}${backdrop_path}`} />
  //           </div>
  //           <div className="text-wrapper">
  //             <h1>{i + 1}</h1>
  //             <Link to={`movie/${id}`}>
  //               <h2>{name || title}</h2>
  //             </Link>
  //             <h2>{renderGenres(genre_ids)}</h2>
  //           </div>
  //           {/* <img src={`${imgBase.wURL}${backdrop_path}`} /> */}
  //         </li>
  //       );
  //     }
  //   );
  // }
  function renderFarm() {
    if (movies === null) return "";
    if (movies === undefined) return "";
    console.log(movies);
    return movies.results
      .slice(0, 5)
      .map(
        (
          { overview, name, poster_path, backdrop_path, id, title, genre_ids },
          i
        ) => {
          return (
            <li>
              <div className="img-wrapper">
                {/* <img className="test" src={`${imgBase.orURL}${poster_path}`} /> */}
                <img
                  className="test"
                  src={`${imgBase.orURL}${backdrop_path}`}
                />
              </div>
              <div className="text-wrapper">
                {/* <h1>{i + 1}</h1> */}
                <Link to={`movie/${id}`}>
                  <h2>{name || title}</h2>
                </Link>
                <div>{renderGenres(genre_ids)}</div>
              </div>
              {/* <img src={`${imgBase.wURL}${backdrop_path}`} /> */}
            </li>
          );
        }
      );
  }
  // function a() {
  //   const element = document.querySelectorAll("h1");
  //   console.log(`kjhxdcfgvhbjklm,;///////////////////////////////////`);
  //   element.forEach((cur) => {
  //     function back() {
  //       cur.style.backgroundColor = "blue";
  //     }
  //     cur.addEventListener("click", back);
  //   });
  // }

  return (
    <Style className={`section movie-list ${className}`}>
      <div className="container">
        {/* <Slider slides={renderFarm()} /> */}
        <h2>Top Rated</h2>
        <div className="movie-list-wrapper">
          <ul>{renderFarm()}</ul>
        </div>
        {/* <div>{genres[0].id}</div> */}
      </div>
    </Style>
  );
}
