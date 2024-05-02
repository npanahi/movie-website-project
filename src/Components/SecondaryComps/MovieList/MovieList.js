import React from "react";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import { Style } from "./MovieListStyle";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Timer from "../../../helpers/timers/remainDates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import formatTime from "../../../helpers/dateFormater/dateFormater";
import shuffleArr from "../../../helpers/shuffle/shuffleArr";
export default function MovieList(props) {
  const { movies, genres, title, className, showNumber, maxDate, series } =
    props;
  console.log(props);

  function renderGenres(arr) {
    if (genres === null || genres === undefined) return "";
    return genres.map((cur) => {
      if (arr.includes(cur.id)) return <span key={cur.id}>{cur.name}. </span>;
    });
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    // console.log(props);
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  function renderFarm() {
    if (movies === null) return "";
    if (movies === undefined) return "";

    if (series) {
      movies.results = shuffleArr(movies.results);
    }
    return movies.results.map(
      (
        {
          overview,
          name,
          poster_path,
          backdrop_path,
          id,
          title,
          genre_ids,
          release_date,
          vote_average,
        },
        i
      ) => {
        if (backdrop_path === null) return "";

        return (
          <div key={id} className="list">
            <div className="backdrop-holder">
              <Link to={`movie/${id}`}>
                <div className="image-wrapper">
                  <img
                    alt={title}
                    className="shadow "
                    src={`${imgBase.orURL}${poster_path}`}
                  />
                  <div className="elipsis-icon">
                    <FontAwesomeIcon className="icon" icon={faEllipsis} />
                  </div>
                  <div className="vote-chart shadow">
                    <div className="circle relative fcgvhjuji">
                      <div className="vote-ave ">
                        {vote_average > 0 ? (
                          <span>{`${Number(
                            vote_average * 10
                          ).toFixed()}%`}</span>
                        ) : (
                          "NR"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-wrapper flex-x align-center gap-20">
              {showNumber ? <h1 className="num">{i + 1}</h1> : ""}
              <div className="title-genres">
                <Link to={`movie/${id}`}>
                  <div className="title">{name || title}</div>
                </Link>
                <div className="genres">{renderGenres(genre_ids)}</div>
                <div className="release-date">
                  {!release_date ? "" : formatTime(release_date)}
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  }

  return (
    <Style>
      <div className="container">
        <div className={className}>
          <h2 className="main-title">{title}</h2>
          {maxDate ? <Timer className="m-b-10" maximumDate={maxDate} /> : ""}
          <div className="movie-list-wrapper m-t-20">
            <div className="slider-container">
              <Slider {...settings} className="slider">
                {renderFarm()}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
