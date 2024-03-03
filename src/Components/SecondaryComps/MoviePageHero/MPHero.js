import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPri";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import timeGenerator from "../../../helpers/timers/timeGenerator";
import { Style } from "./MPHeroStyle";

export default function MPHero({ movie, casts }) {
  console.log(movie);
  function renderGenres(genres) {
    if (genres === undefined) return;
    return genres.map((cur) => {
      return <span key={cur.id}>{cur.name} </span>;
    });
  }
  const renderCasts = function () {
    if (casts === null || casts === undefined) return;
    if (casts.cast === null || casts.cast === undefined) return;
    const sliceEnd = 3;
    return casts.cast
      .slice(0, sliceEnd)
      .map(({ known_for_department, profile_path, name }, i) => {
        if (known_for_department == "Acting")
          return (
            <>
              <span className="cast-name">
                {i !== sliceEnd - 1 ? name + ", " : name}
              </span>
            </>
          );
      });
  };
  if (casts === null || casts === undefined) return;
  if (movie === null || movie === undefined) return;

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
                <div className="flex-box top flex-x align-center">
                  <a href={movie.homepage} target="blank">
                    <ButtonPrimary text="Continue" />
                  </a>
                  <div className="">{movie.overview}</div>
                </div>
                <div className="flex-box bottom flex-x align-center m-t-10 space-between">
                  <div className="left flex-x align-center gap-10">
                    <ButtonPrimary text="In Next" />
                    <div className="genres">
                      <b>{renderGenres(movie.genres)}</b>
                    </div>
                    <div className="release_date">
                      {movie.release_date
                        ? movie.release_date.split("-")[0]
                        : ""}
                    </div>
                    <div>{timeGenerator(movie.runtime)}</div>
                  </div>
                  <div className="right align-center">
                    <div className="actores">
                      <div className="main-actores ">
                        <b>Main actores:</b> {renderCasts()}
                      </div>
                      {/* <div className="director">Directed by:</div> */}
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
