import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  function onMouseDown(e) {
    console.log(e);
    setShow(true);
  }
  function onMouseLeave(e) {
    setShow(false);
  }
  // function onClickCopy(e) {
  //   let copy = navigator.clipboard.writeText(
  //     `http://localhost:60842/movie/${id}`
  //   );
  //   return copy;
  //   // setShow(!shs
  // }
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
              <div className="image-wrapper">
                <Link to={`movie/${id}`}>
                  <div className="img-back">
                    <img
                      alt={title}
                      className="shadow "
                      src={`${imgBase.orURL}${poster_path}`}
                    />
                  </div>
                </Link>
                <div className="elipsis-icon">
                  <div className="el-icon">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faEllipsis}
                      onMouseDown={onMouseDown}
                    />
                  </div>
                  {show && (
                    <div
                      className="elip-text  "
                      onMouseLeave={onMouseLeave}
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `http://localhost:64172
                        /movie/${id}`
                        )
                      }
                    >
                      <div className="elip-container flex-x pointer ">
                        <div class="content ">Share</div>
                        <div className="share-icon">
                          {/* <img
                            src="assets/photos/iphone/share.svg"
                            alt="icon"
                          /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            class="context-menu__option-icon"
                          >
                            <path
                              d="M8.007 10.42c-.338 0-.617-.293-.617-.643V2.752l.046-1.041-.41.517-.922 1.04a.549.549 0 01-.418.189.542.542 0 01-.55-.559c0-.174.06-.3.172-.419L7.536.223C7.695.056 7.848 0 8.006 0c.166 0 .312.056.471.223l2.228 2.256a.575.575 0 01.179.42.547.547 0 01-.557.558.559.559 0 01-.418-.189l-.921-1.04-.411-.51.053 1.034v7.025c0 .35-.279.643-.623.643zM4.18 16C2.75 16 2 15.218 2 13.723V6.858c0-1.501.75-2.277 2.181-2.277h1.81v1.39H4.267c-.61 0-.948.335-.948 1.006v6.62c0 .671.338 1.006.948 1.006h7.466c.603 0 .948-.335.948-1.005V6.977c0-.67-.345-1.006-.948-1.006h-1.704v-1.39h1.79c1.438 0 2.181.783 2.181 2.277v6.865C14 15.218 13.257 16 11.819 16H4.18z"
                              fill="#707070"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link to={`movie/${id}`}>
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
                </Link>
              </div>
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
