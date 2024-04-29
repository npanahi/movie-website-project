import { useParams } from "react-router-dom";

import api from "../../../../helpers/baseApi/api";
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import timeGenerator from "../../../../helpers/timers/timeGenerator";
import { Style } from "./DetailsStyle";
export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [language, setLanguage] = useState(null);
  useEffect(() => {
    getMovieApi();
    getLanguageApi();
  }, [id]);
  async function getMovieApi() {
    try {
      const res = await api.get(`movie/${id}`);
      setMovie(res.data);
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
  const renderLanguages = function () {
    if (language === null || language === undefined) return;
    return language.map(({ iso_639_1, english_name, id }) => {
      if (iso_639_1 === movie.original_language) {
        return <div key={id}>{english_name}</div>;
      }
    });
  };
  if (movie === null || movie === undefined) return "";
  return (
    <Style>
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
                  return i === movie.genres.length - 1 ? (
                    <span key={c.id}>{c.name}</span>
                  ) : (
                    <span key={c.id}>{c.name + ", "}</span>
                  );
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
                      <img src="/assets/photos/footer/cc.png" alt="badge" />
                    </div>
                    <div className="text">
                      Closed subtitles are subtitles in the available languages
                      ​​that contain additional information not included in the
                      dialogue.
                    </div>
                  </li>
                  <li>
                    <div className="badge m-t-10">
                      <img src="/assets/photos/footer/ad.png" alt="badge" />
                    </div>
                    <div className="text">
                      Audio descriptions (AB) are spoken tracks that describe
                      actions on the screen in order to make them understandable
                      for blind and visually impaired people.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
