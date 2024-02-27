import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPri";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import timeGenerator from "../../../helpers/timers/timeGenerator";
import { Style } from "./MPHeroStyle";

export default function MPHero({ movie, casts }) {
  function renderGenres(genres) {
    if (genres === undefined) return;
    return genres.map((cur) => {
      return <span key={cur.id}>{cur.name} </span>;
    });
  }
  const renderCasts = function () {
    if (casts === null || casts === undefined) return;
    if (casts.cast === null || casts.cast === undefined) return;
    // console.log(casts);
    return casts.cast
      .slice(0, 3)
      .map(({ known_for_department, profile_path, name }, i) => {
        if (known_for_department == "Acting")
          return (
            <>
              <span className="cast-name"> {name}, </span>
            </>
          );
      });
  };
  return (
    <Style className="section section-1 section-movie-hero">
      <div className="container-full m-b-10 ">
        <div className="hero-box">
          <div className="hero-wrapper relative">
            <div className="background-wrapper">
              <img src={`${imgBase.orURL}${movie.backdrop_path}`} />
            </div>
            <div className="container ">
              <h1>{movie.title}</h1>
              <h4>{movie.tagline}</h4>
              <div className=" text-wrapper">
                <div className="flex-box top flex-x">
                  <a href={movie.homepage} target="blank">
                    <ButtonPrimary text="Continue" />
                  </a>
                  <div className="col-5 grow-1">{movie.overview}</div>
                  <div className="actores flex-y">
                    <div className="main-actores">
                      Main actores: {renderCasts()}
                    </div>
                    <div className="director">Directed by:</div>
                  </div>
                </div>
                <div className="flex-box bottom flex-x align-end">
                  <ButtonPrimary text="In Next" />
                  <div className="genres">{renderGenres(movie.genres)}</div>
                  <div className="release_date">
                    {movie.release_date ? movie.release_date.split("-")[0] : ""}
                  </div>
                  <div>{timeGenerator(movie.runtime)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
