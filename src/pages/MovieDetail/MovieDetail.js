import { Link, useParams } from "react-router-dom";
import { Style } from "./MovieDetailStyle";
import api from "../../helpers/baseApi/api";
import { useEffect, useState } from "react";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import MPHero from "../../Components/SecondaryComps/MoviePageHero/MPHero";
import formatTime from "../../helpers/dateFormater/dateFormater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    getMovieApi();
    getCastApi();
    getSimilarApi();
    getImgGalleryApi();
    getReviewsApi();
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
      // console.log(res.data);
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
                <img src={`${imgBase.orURL}${profile_path}`} />
              </div>
              <div className="cast-name">{name}</div>
              <div className="character">{character}</div>
            </li>
          );
      });
  };
  const renderReviews = function () {
    if (reviews === null || reviews === undefined) return "";
    if (credits.cast === null || credits.cast === undefined) return "";
    return reviews.results
      .slice(0, 5)
      .map(({ content, author, created_at, author_details }, i) => {
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
                <p>
                  Written by {author} on {formatTime(created_at)}
                </p>
              </div>
            </div>
            <div className="content">{content}</div>
          </div>
        );
      });
  };
  const renderSimilar = function () {
    if (similar === null || similar === undefined) return;
    return similar.results
      .slice(0, 5)
      .map(({ backdrop_path, title, id: newId }) => {
        if (backdrop_path === null) return "";
        return (
          <li className="col-5">
            <Link to={id !== newId ? `/movie/${newId}` : ""}>
              {/* <Link to={`movie/${id}`}> */}
              <img src={`${imgBase.orURL}${backdrop_path}`} />
              <div>{title}</div>
            </Link>
          </li>
        );
      });
  };
  const renderImages = function () {
    if (images === null || similar === undefined) return;
    return images.backdrops.slice(0, 20).map(({ file_path }) => {
      return (
        <li>
          <img src={`${imgBase.orURL}${file_path}`} />
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
      <PrimaryHeaderFooter>
        <MPHero movie={movie} casts={credits} />
        <div className="container">
          <div className="movie-casts">
            <h2>Casts</h2>
            <ul className="casts flex-x">{renderCasts()}</ul>
          </div>
          <div className="movie-similar">
            <h2>Similars</h2>
            <ul className="similars flex-x">{renderSimilar()}</ul>
          </div>
          <div className="movie-gallery">
            <h2>Gallery</h2>
            <ul className="gallery ">{renderImages()}</ul>
          </div>
          {reviews.results.length > 0 ? (
            <div className="movie-reviews">
              <h2>Reviews</h2>
              <div className="review-box">{renderReviews()}</div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* <div> {id}</div>
          <div> {movie.title}</div> */}
        {/* <img src={`${imgBase.orURL}${movie.backdrop_path}`} /> */}
      </PrimaryHeaderFooter>
    </Style>
  );
}
