import { Link, useParams } from "react-router-dom";
import { Style } from "./MovieDetailStyle";
import api from "../../helpers/baseApi/api";
import { useEffect, useState } from "react";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import MPHero from "../../Components/SecondaryComps/MoviePageHero/MPHero";
import formatTime from "../../helpers/dateFormater/dateFormater";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import timeGenerator from "../../helpers/timers/timeGenerator";
export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [images, setImages] = useState(null);
  const [language, setLanguage] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    getMovieApi();
    getCastApi();
    getSimilarApi();
    getImgGalleryApi();
    getReviewsApi();
    getLanguageApi();
    getRecommendationsApi();
  }, [id]);
  async function getMovieApi() {
    try {
      const res = await api.get(`movie/${id}`);
      setMovie(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getCastApi() {
    try {
      const res = await api.get(`/movie/${id}/credits`);

      setCredits(res.data);
      // console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getReviewsApi() {
    try {
      const res = await api.get(`/movie/${id}/reviews`);
      setReviews(res.data);

      console.log(res.data.results.length > 0);
    } catch (e) {
      console.log(e);
    }
  }
  async function getSimilarApi() {
    try {
      const res = await api.get(`/movie/${id}/similar`);
      setSimilar(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getImgGalleryApi() {
    try {
      const res = await api.get(`/movie/${id}/images`);
      setImages(res.data);
      // console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getRecommendationsApi() {
    try {
      const res = await api.get(`/movie/${id}/recommendations`);
      setRecommendations(res.data);
      // console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getLanguageApi() {
    try {
      const res = await api.get(`/configuration/languages`);
      setLanguage(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const renderCasts = function () {
    if (credits === null || credits === undefined) return;
    if (credits.cast === null || credits.cast === undefined) return;

    return credits.cast
      .slice(0, 10)
      .map(({ known_for_department, profile_path, name, character }, i) => {
        if (profile_path === null) return;
        if (known_for_department === "Acting")
          return (
            <li>
              <div className="cast-img">
                <img
                  className="shadow"
                  src={`${imgBase.orURL}${profile_path}`}
                />
              </div>
              <div className="cast-name">{name}</div>
              <div className="character">{character}</div>
            </li>
          );
      });
  };
  const renderReviews = function () {
    if (reviews === null || reviews === undefined) return "";
    return reviews.results.map(
      ({ content, author, created_at, author_details }, i) => {
        if ((content, author, created_at, author_details === null)) return "";
        return (
          <div className="review-wrapper col-8">
            <div className="author flex-x align-start">
              <div className="avatar">
                <img
                  alt="avatar"
                  src={
                    author_details.avatar_path !== null
                      ? imgBase.orURL + author_details.avatar_path
                      : "/assets/photos/header/profile-logo.jpg"
                  }
                />
              </div>
              <div className="text">
                <h2>A review by {author}</h2>
                <p className="caption">
                  Written by {author} on {formatTime(created_at)}
                </p>
              </div>
            </div>
            <div className="content">{content}</div>
          </div>
        );
      }
    );
  };
  const renderSimilar = function () {
    if (similar === null || similar === undefined) return;
    return similar.results
      .slice(0, 5)
      .map(({ backdrop_path, title, id: newId, poster_path }) => {
        if (poster_path === null) return "";
        return (
          <li className="col-5">
            <Link to={id !== newId ? `/movie/${newId}` : ""}>
              {/* <Link to={`movie/${id}`}> */}
              <img className="shadow" src={`${imgBase.orURL}${poster_path}`} />
              <div className="title">{title}</div>
            </Link>
          </li>
        );
      });
  };
  const renderRecommendations = function () {
    if (recommendations === null || recommendations === undefined) return;
    return recommendations.results
      .slice(0, 5)
      .map(({ backdrop_path, title, id: newId, poster_path }) => {
        if (poster_path === null) return "";
        return (
          <li className="col-5">
            <Link to={id !== newId ? `/movie/${newId}` : ""}>
              <img className="shadow" src={`${imgBase.orURL}${poster_path}`} />
              <div className="title">{title}</div>
            </Link>
          </li>
        );
      });
  };
  const renderImages = function () {
    if (images === null || images === undefined) return;
    return images.backdrops.slice(0, 20).map(({ file_path }) => {
      return (
        <li>
          <img className="shadow" src={`${imgBase.orURL}${file_path}`} />
        </li>
      );
    });
  };
  const renderLanguages = function () {
    if (language === null || language === undefined) return;
    return language.map(({ iso_639_1, english_name }) => {
      if (iso_639_1 === movie.original_language) {
        return <div>{english_name}</div>;
      }
    });
  };
  const renderCompanies = function () {
    return movie.production_companies.map(({ logo_path, name }) => {
      if (logo_path === null || logo_path === undefined) return "";
      return (
        <li className="companies">
          <div className="img-wrapper ">
            <img className="logo" src={`${imgBase.orURL}${logo_path}`} />{" "}
          </div>
        </li>
      );
    });
  };

  if (movie === null || movie === undefined) return;
  if (credits === null || credits === undefined) return;
  if (reviews === null || reviews === undefined) return;
  if (similar === null || similar === undefined) return;
  if (images === null || images === undefined) return;

  return (
    <Style>
      <PrimaryHeaderFooter className="footer">
        <MPHero movie={movie} casts={credits} />
        <div className="container">
          {similar.results.length > 0 ? (
            <div className="movie-similar">
              <h2>Similars</h2>
              <ul className="similars flex-x">{renderSimilar()}</ul>
            </div>
          ) : (
            ""
          )}
          {recommendations.results.length > 0 ? (
            <div className="movie-recommendations">
              <h2>Recommendations</h2>
              <ul className="recommendations flex-x">
                {renderRecommendations()}
              </ul>
            </div>
          ) : (
            ""
          )}

          {credits.cast.length > 0 ? (
            <div className="movie-casts">
              <h2>Casts</h2>
              <ul className="casts flex-x">{renderCasts()}</ul>
            </div>
          ) : (
            ""
          )}
          {images.backdrops.length > 0 ? (
            <div className="movie-gallery">
              <h2>Gallery</h2>
              <ul className="gallery ">{renderImages()}</ul>
            </div>
          ) : (
            ""
          )}
          {reviews.results.length > 0 ? (
            <div className="movie-reviews">
              <h2 className="review-title">People reviews</h2>
              <div className="review-box">{renderReviews()}</div>
            </div>
          ) : (
            ""
          )}
        </div>
        {movie.production_companies.length > 0 ? (
          <div className="production-companies">
            <div className="container">
              <ul className="flex-x space-between">{renderCompanies()}</ul>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="details">
          <div className="container">
            <h2>Over</h2>
            <div className="overview-box col-4">
              <div className="over-wrapper">
                <div className="movie-title">
                  <h2>{movie.title}</h2>
                </div>
                <div className="movie-genre">
                  {movie.genres.map((c, i) => {
                    return i === movie.genres.length - 1
                      ? c.name
                      : c.name + ", ";
                  })}
                </div>
                <div className="over-caption">{movie.overview}</div>
              </div>
            </div>
            <div className="info">
              <div className="flex-box flex-x space-between">
                <div className="title-wrapper">
                  <h2 className="titr">Information</h2>
                  <ul className="list">
                    <li className="m-b-20">
                      <div className="title">Appeared</div>
                      <div className="text">
                        {movie.release_date.split("-")[0]}
                      </div>
                    </li>
                    <li className="m-b-20">
                      <div className="title">Run time</div>

                      <div className="text">{timeGenerator(movie.runtime)}</div>
                    </li>
                    <li className="m-b-20">
                      <div className="title">Region of origin</div>
                      <div className="text">
                        {movie.production_countries.map((c, i) => {
                          return i === movie.production_countries.length - 1
                            ? c.name
                            : c.name + ", ";
                        })}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="title-wrapper">
                  <h2 className="titr">Language</h2>
                  <ul className="list">
                    <li className="m-b-20">
                      <div className="title">Original audio</div>
                      <div className="text">{renderLanguages()}</div>
                    </li>
                    <li className="m-b-20">
                      <div className="title">Original title</div>
                      <div className="text">{movie.original_title}</div>
                    </li>{" "}
                    <li>
                      <a
                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                        className="imdb"
                        target="blank"
                      >
                        <img alt="imdb" src="/assets/photos/footer/imdb.png" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="title-wrapper col-4">
                  <h2 className="titr">Accessibility</h2>
                  <ul className="list">
                    <li>
                      <div className="badge">
                        <img src="/assets/photos/footer/cc.png" />
                      </div>
                      <div className="text">
                        Closed subtitles are subtitles in the available
                        languages ​​that contain additional information not
                        included in the dialogue.
                      </div>
                    </li>
                    <li>
                      <div className="badge m-t-10">
                        <img src="/assets/photos/footer/ad.png" />
                      </div>
                      <div className="text">
                        Audio descriptions (AB) are spoken tracks that describe
                        actions on the screen in order to make them
                        understandable for blind and visually impaired people.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
