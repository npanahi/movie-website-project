import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPri";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import timeGenerator from "../../../helpers/timers/timeGenerator";
import { Style } from "./MPHeroStyle";
import React from "react";

export default function MPHero({ movie, casts }) {
  console.log(movie);
  function renderGenres(genres) {
    if (genres === undefined) return;
    return genres.map((cur, i) => {
      return (
        <span key={cur.id}>
          {i !== genres.length - 1 ? cur.name + ". " : cur.name}
        </span>
      );
    });
  }
  const renderCasts = function () {
    if (casts === null || casts === undefined) return;
    if (casts.cast === null || casts.cast === undefined) return;
    const actorsToRender = casts.cast.slice(0, 3);
    if (actorsToRender.length === 0) return;
    return actorsToRender.map(
      ({ known_for_department, profile_path, name, id }, i) => {
        if (known_for_department == "Acting")
          return (
            <span key={i} className="ca st-name">
              {i !== actorsToRender.length - 1 ? name + ", " : name}
            </span>
          );
      }
    );
  };
  const renderDirector = function () {
    if (casts === null || casts === undefined) return;
    if (casts.crew === null || casts.cast === undefined) return;
    console.log(casts.crew);
    const castsToRender = casts.crew
      .filter((item) => {
        return item.known_for_department === "Directing";
      })
      .slice(0, 3);
    if (castsToRender.length === 0) return;
    return (
      <>
        <b>Director </b>
        {castsToRender.map(
          ({ known_for_department, profile_path, name, id }, i) => {
            if (known_for_department == "Directing")
              return (
                <span key={i} className="director-name">
                  {i !== castsToRender.length - 1 ? name + ", " : name}
                </span>
              );
            else {
              return "";
            }
          }
        )}
      </>
    );
  };

  if (casts === null || casts === undefined) return;
  if (movie === null || movie === undefined) return;

  return (
    <Style className="section section-1 section-movie-hero">
      <div className="container-full m-b-10 ">
        <div className="hero-box">
          <div className="hero-wrapper relative">
            <div className="background-wrapper">
              <img
                alt={`${movie.title}`}
                src={`${imgBase.orURL}${
                  movie.backdrop_path || movie.poster_path
                }`}
              />
              <div className="logo">
                <img
                  className="logo-img "
                  alt="logo"
                  src="https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png"
                />
              </div>
            </div>
            <div className="content">
              <div className=" container ">
                <h1>{movie.title}</h1>
                <h4>{movie.tagline}</h4>
                <div className=" text-wrapper">
                  <div className="top flex-x align-center gap-10">
                    <a href={movie.homepage} target="blank">
                      <ButtonPrimary text="Continue" />
                    </a>
                    <div className="overview">{movie.overview}</div>
                  </div>
                  <div className="bottom flex-x align-center   space-between gap-10 ">
                    <div className="left flex-x align-center gap-10">
                      <ButtonPrimary text="In Next" />
                      <div className="genres">{renderGenres(movie.genres)}</div>
                      <div className="release_date">
                        {movie.release_date ? movie.release_date.split[0] : ""}
                      </div>
                      <div className="time-generator">
                        {timeGenerator(movie.runtime)}
                      </div>
                      <div className="badge">
                        <img alt="logos" src="/assets/photos/badge.png" />
                      </div>
                      <div className="reting m-y-20">
                        {movie.vote_average > 0 ? (
                          <div className="rating-text">
                            {` ${Number(movie.vote_average * 10).toFixed()}%`}
                          </div>
                        ) : (
                          <div className="rating-text">NR</div>
                        )}
                      </div>
                    </div>
                    <div className="right align-center">
                      <div className="actores  ">
                        <div className="main-actores m-b-5 ">
                          <b>Staring</b> {renderCasts()}
                        </div>
                        <div className="director">{renderDirector()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
