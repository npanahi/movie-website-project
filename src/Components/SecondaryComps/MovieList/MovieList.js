import { useEffect, useState } from "react";
import api from "../../../helpers/baseApi/api";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import { Style } from "./MovieListStyle";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Timer from "../../../helpers/timers/remainDates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function MovieList(props) {
  const { movies, genres, title, className, showNumber, maxDate } = props;
  console.log(props);

  function renderGenres(arr) {
    if (genres === null || genres === undefined) return "";
    return genres.map((cur) => {
      if (arr.includes(cur.id)) return <span>{cur.name}. </span>;
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
    console.log(props);
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
    return movies.results.map(
      (
        { overview, name, poster_path, backdrop_path, id, title, genre_ids },
        i
      ) => {
        if (backdrop_path === null) return "";
        return (
          <div className="list">
            <div className="backdrop-holder">
              <Link to={`movie/${id}`}>
                <div className="image-wrapper">
                  <img
                    className="shadow "
                    src={`${imgBase.orURL}${poster_path}`}
                  />
                  <div className="elipsis-icon">
                    <FontAwesomeIcon className="icon" icon={faEllipsis} />
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-wrapper flex-x align-center gap-20">
              {showNumber ? <h1 className="num">{i + 1}</h1> : ""}
              <div className="title-genres">
                <Link to={`movie/${id}`}>
                  <h2 className="title">{name || title}</h2>
                </Link>
                <div className="genres">{renderGenres(genre_ids)}</div>
              </div>
            </div>
          </div>
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
  // if (maxDate === null || maxDate === undefined) return;
  return (
    <Style>
      <div className="container">
        <div className={className}>
          <h2>{title}</h2>
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
