import { Link, useParams } from "react-router-dom";
import { Style } from "./MovieDetailStyle";
import api from "../../helpers/baseApi/api";
import { useEffect, useState } from "react";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import MPHero from "../../Components/SecondaryComps/MoviePageHero/MPHero";
import formatTime from "../../helpers/dateFormater/dateFormater";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Details from "../../Components/SecondaryComps/MovieDetails/Details/Details";
export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [images, setImages] = useState(null);

  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovieApi();
    getCreditsApi();
    getSimilarApi();
    getImgGalleryApi();
    getReviewsApi();
    getRecommendationsApi();
  }, [id]);
  async function getMovieApi() {
    setLoading(true);
    try {
      const res = await api.get(`movie/${id}`);
      setMovie(res.data);
      setLoading(false);
      // console.log(res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  async function getCreditsApi() {
    setLoading(true);

    try {
      const res = await api.get(`/movie/${id}/credits`);
      setCredits(res.data);
      setLoading(false);

      // console.log(res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  async function getReviewsApi() {
    setLoading(true);

    try {
      const res = await api.get(`/movie/${id}/reviews`);
      setReviews(res.data);
      setLoading(false);
      console.log(res.data.results.length > 0);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  async function getSimilarApi() {
    setLoading(true);
    try {
      const res = await api.get(`/movie/${id}/similar`);
      setSimilar(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  async function getImgGalleryApi() {
    setLoading(true);

    try {
      const res = await api.get(`/movie/${id}/images`);
      setImages(res.data);
      setLoading(false);

      // console.log(res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  async function getRecommendationsApi() {
    setLoading(true);

    try {
      const res = await api.get(`/movie/${id}/recommendations`);
      setRecommendations(res.data);
      setLoading(false);
      // console.log(res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const renderCasts = function () {
    console.log(credits);
    if (credits === null || credits === undefined) return;
    if (credits.cast === null || credits.cast === undefined) return;

    return credits.cast
      .slice(0, 10)
      .map(({ known_for_department, profile_path, name, character, id }, i) => {
        if (profile_path === null || profile_path === undefined) return;
        if (known_for_department === "Acting")
          return (
            <li key={id}>
              <div className="cast-img">
                <img
                  alt={name}
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
      ({ content, author, created_at, author_details, id }, i) => {
        if ((content, author, created_at, author_details === null)) return "";
        return (
          <div key={id} className="review-wrapper col-8">
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
    if (similar.results === null || similar.results === undefined) return;
    return similar.results
      .slice(0, 5)
      .map(({ backdrop_path, title, id: newId, poster_path }) => {
        if (poster_path === null) return "";
        return (
          <li key={newId} className="col-5">
            <Link to={id !== newId ? `/movie/${newId}` : ""}>
              <img
                alt={title}
                className="shadow"
                src={`${imgBase.orURL}${poster_path}`}
              />
              <div className="title">{title}</div>
            </Link>
          </li>
        );
      });
  };
  const renderRecommendations = function () {
    if (recommendations === null || recommendations === undefined) return;
    if (
      recommendations.results === null ||
      recommendations.results === undefined
    )
      return;
    return recommendations.results
      .slice(0, 5)
      .map(({ backdrop_path, title, id: newId, poster_path }) => {
        if (poster_path === null) return "";
        return (
          <li key={newId} className="col-5">
            <Link to={id !== newId ? `/movie/${newId}` : ""}>
              <img
                alt={title}
                className="shadow"
                src={`${imgBase.orURL}${poster_path}`}
              />
              <div className="title">{title}</div>
            </Link>
          </li>
        );
      });
  };
  const renderImages = function () {
    if (images === null || images === undefined) return;
    return images.backdrops.slice(0, 20).map(({ file_path, id }) => {
      return (
        <li key={id}>
          <img
            alt="gallery"
            className="shadow"
            src={`${imgBase.orURL}${file_path}`}
          />
        </li>
      );
    });
  };
  const renderCompanies = function () {
    return movie.production_companies.map(({ logo_path, name }) => {
      if (logo_path === null || logo_path === undefined) return "";
      return (
        <li className="companies">
          <div className="img-wrapper ">
            <img
              alt="company"
              className="logo"
              src={`${imgBase.orURL}${logo_path}`}
            />{" "}
          </div>
        </li>
      );
    });
  };

  if (movie === null || movie === undefined) return "";
  if (credits === null || credits === undefined) return "";
  if (reviews === null || reviews === undefined) return "";
  if (similar === null || similar === undefined) return "";
  if (similar.results === null || similar.results === undefined) return "";
  if (images === null || images === undefined) return "";

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
        <Details />
      </PrimaryHeaderFooter>
    </Style>
  );
}
