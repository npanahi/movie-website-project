import { useEffect, useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPri";
import { Style } from "./HPHeroStyle";
import { Button, Input } from "antd";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import timeGenerator from "../../../helpers/timers/timeGenerator";
import api from "../../../helpers/baseApi/api";
import { Link, useParams } from "react-router-dom";
import SingleSlider from "../../../helpers/slider/singleSlide/singleSlide";

export default function HPHero({ movies, genres }) {
  // console.log(`Heroooooooooooo`);
  // console.log(movie);
  // console.log(genres);
  // const { id } = useParams();
  // const [movies, setMovies] = useState(null);
  // const [genres, setGenre] = useState(null);
  // useEffect(() => {
  //   buildUI();
  // }, []);

  // async function getMoviesApi() {
  //   try {
  //     const res = await api.get(
  //       "trending/movie/day?language=en-US"
  //       // "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&size=1"
  //       // genre/movie/list?language=en
  //     );
  //     // setMovies(res.data);
  //     // setDeposit(calcDeposit(res.data));
  //     // console.log(res.data);
  //     const data = res.data;
  //     console.log(data);
  //     // console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async function getGenreApi() {
  //   try {
  //     const res = await api.get("genre/movie/list?language=en");
  //     const data = res.data;
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function buildUI() {
  //   let newGenres = await getGenreApi();
  //   if (newGenres !== undefined) {
  //     console.log(newGenres);
  //     setGenre(newGenres.genres);
  //   }
  //   let newMovies = await getMoviesApi();
  //   if (newMovies !== undefined) {
  //     console.log(newMovies);
  //     setMovies(newMovies);
  //   }
  // }

  function renderGenres(arr) {
    return genres.map((cur) => {
      if (arr.includes(cur.id)) return <span> {cur.name} </span>;
    });
  }
  function renderFarm() {
    if (movies === null) return "";
    if (movies === undefined) return "";
    console.log(movies);
    return movies.results.map(
      (
        { overview, name, poster_path, backdrop_path, id, title, genre_ids },
        i
      ) => {
        return (
          <>
            <div className="hero-wrapper relative">
              <div className="background-wrapper">
                <img src={`${imgBase.orURL}${backdrop_path}`} />
              </div>
              <div className="container text-wrapper absolute">
                <div className="flex-box flex-y">
                  <h2>{title}</h2>
                  <div className="col-5">{overview}</div>
                  <div>{renderGenres(genre_ids)}</div>
                  <Link className="i-b" to={`movie/${id}`}>
                    <ButtonPrimary text="To the broadcast" />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="img-wrapper"> */}
            {/* <img className="test" src={`${imgBase.orURL}${poster_path}`} /> */}
            {/* <img className="test" src={`${imgBase.orURL}${backdrop_path}`} /> */}
            {/* </div>
            <div className="text-wrapper">
              <h1>{i + 1}</h1>
              <Link to={`movie/${id}`}>
                <h2>{name || title}</h2>
              </Link>
              <h2>{renderGenres(genre_ids)}</h2>
            </div> */}
            {/* <img src={`${imgBase.wURL}${backdrop_path}`} /> */}
          </>
        );
      }
    );
  }

  // function renderFarm() {
  //   if (movies === null) return "";
  //   if (movies === undefined) return "";
  //   console.log(movies);
  //   return movies.results
  //     .slice(6, 11)
  //     .map(({ overview, name, poster_path, backdrop_path, id, title }, i) => {
  //       return (

  //       );
  //     });
  // }

  // if (movie === null || movie === undefined) return "";
  // if (genres === null || genres === undefined) return "";

  return (
    <Style className="section section-1 section-Hero">
      <div className="container-full m-b-10 ">
        <div className="hero-box relative">
          <SingleSlider slides={renderFarm()} />
          {/* <ul className="absolute">{}</ul> */}
        </div>
      </div>
    </Style>
  );
}
