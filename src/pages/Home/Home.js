import { useEffect, useState } from "react";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import HPHero from "../../Components/SecondaryComps/HomePageHero/HPHero";
import MovieList from "../../Components/SecondaryComps/MovieList/MovieList";
import { Style } from "./HomeStyle";
import api from "../../helpers/baseApi/api";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../Components/SecondaryComps/Buttons/ButtonPrimary/ButtonPri";

export default function HomePage() {
  // MOVIE STATES
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  // SERIES STATES
  const [series, setSeries] = useState(true);
  const [todayAiringSeries, setTodayAiringSeries] = useState(null);
  const [onAirSeries, setOnAirSeries] = useState(null);
  const [popularSeries, setPopularSeries] = useState(null);
  const [topRatedSeries, setTopRatedSeries] = useState(null);

  useEffect(() => {
    //MOVIES
    getMoviesApi();
    getGenreApi();
    getUpcommingMoviesApi();
    gettopRatedMoviesApi();
    getNowPlayingMoviesApi();
    getPopularMoviesApi();
    //SERIES
    getAirTodaySeriesApi();
    getOnAirSeriesApi();
    getPopularSeriesApi();
    getTopRatedSeriesApi();
  }, []);
  //GET MOVIES API
  async function getMoviesApi() {
    try {
      const res = await api.get("trending/movie/day?language=en-US");
      const data = res.data;
      // console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getGenreApi() {
    try {
      const res = await api.get("genre/movie/list?language=en");
      const data = res.data.genres;
      // console.log(data);
      setGenres(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getUpcommingMoviesApi() {
    try {
      const res = await api.get("movie/upcoming?language=en-US");
      const data = res.data;
      // console.log(data);
      setUpcomingMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function gettopRatedMoviesApi() {
    try {
      const res = await api.get("movie/top_rated?language=en-US");
      const data = res.data;
      // console.log(data);
      setTopRatedMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getNowPlayingMoviesApi() {
    try {
      const res = await api.get("movie/now_playing?language=en-US");
      const data = res.data;
      // console.log(data);
      setNowPlayingMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getPopularMoviesApi() {
    try {
      const res = await api.get("movie/popular?language=en-US&page=2");
      const data = res.data;
      // console.log(data);
      setPopularMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  // GET SERIES API
  async function getAirTodaySeriesApi() {
    try {
      const res = await api.get("tv/airing_today?language=en-US&page=1");
      const data = res.data;
      console.log(data);
      setTodayAiringSeries(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getOnAirSeriesApi() {
    try {
      const res = await api.get("tv/on_the_air?language=en-US&page=1");
      const data = res.data;
      console.log(data);
      setOnAirSeries(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getPopularSeriesApi() {
    try {
      const res = await api.get("tv/popular?language=en-US&page=1");
      const data = res.data;
      console.log(data);
      setPopularSeries(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getTopRatedSeriesApi() {
    try {
      const res = await api.get("tv/top_rated?language=en-US&page=1");
      const data = res.data;
      console.log(data);
      setTopRatedSeries(data);
    } catch (error) {
      console.log(error);
    }
  }
  if (movies === null || movies === undefined) return "";
  if (genres === null || genres === undefined) return "";
  if (nowPlayingMovies === null || nowPlayingMovies === undefined) return "";
  return (
    <Style>
      <PrimaryHeaderFooter className="footer">
        {movies !== null ? <HPHero movies={movies} genres={genres} /> : ""}
        <div className="container">
          <MovieList
            className="movie-list"
            movies={movies}
            genres={genres}
            title={"Trending movies"}
          />
          <MovieList
            className="movie-list"
            movies={upcomingMovies}
            genres={genres}
            title={"Upcoming movies"}
          />
          <MovieList
            className="movie-list"
            movies={topRatedMovies}
            genres={genres}
            title={"Top rated movies"}
            showNumber="true"
          />
          <MovieList
            className="movie-list"
            movies={nowPlayingMovies}
            genres={genres}
            title={"Now Playing movies"}
            maxDate={nowPlayingMovies.dates.maximum}
          />
          <MovieList
            className="movie-list"
            movies={popularMovies}
            genres={genres}
            title={"Popular movies"}
          />
          <div className="middle-poster">
            <Link to={`movie`}>
              <img
                className="shadow "
                src="assets/photos/banner.png"
                alt="poster"
              />
            </Link>
          </div>
          <MovieList
            className="movie-list"
            movies={topRatedSeries}
            genres={genres}
            showNumber="true"
            title={"Top rated series"}
          />
          <MovieList
            className="movie-list"
            movies={todayAiringSeries}
            title={"Airing today series"}
            series={series}
          />
          <MovieList
            className="movie-list"
            movies={onAirSeries}
            title={"On the Air series"}
            series={series}
          />
          <MovieList
            className="movie-list"
            movies={popularSeries}
            title={"Popular series"}
            series={series}
          />
          <div className="middle-poster ">
            <Link to={`movie`}>
              <img
                className="shadow "
                src="assets/photos/sugar.png"
                alt="poster"
              />
            </Link>
          </div>
        </div>
        <div className="subcribe">
          <div className="subcribe-wrapper flex-x justify-center ">
            <div className="img-wrapper">
              <img src="assets/photos/iphone/seasonPass.svg" alt="logo" />
            </div>
            <div className="text">
              Every match. Every club. No blackouts. Only on Apple TV.
            </div>
            <div className="sub-botton">
              <button className="sub-btn pointer">Subscribe</button>
              <div className="learn-more center-text pointer">
                Learn more &#8250;
              </div>
            </div>
          </div>
        </div>
        <div className="featured-in">
          <div className="container">
            <div className="logo center-text m-t-100">
              <svg
                width="157"
                height="80"
                viewBox="0 0 157 80"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                class="landing-devices__apple-tv-logo"
              >
                <path d="M43.874 12.7c2.733-3.418 4.588-8.008 4.1-12.7-4 .2-8.883 2.64-11.7 6.06-2.538 2.93-4.784 7.712-4.2 12.205 4.492.4 8.978-2.244 11.8-5.567m4.046 6.446c-6.522-.388-12.068 3.702-15.183 3.702s-7.885-3.506-13.045-3.4c-6.714.098-12.944 3.895-16.35 9.933-7.008 12.08-1.85 29.996 4.965 39.834 3.3 4.867 7.3 10.225 12.554 10.033 4.966-.195 6.912-3.215 12.948-3.215s7.785 3.215 13.04 3.118c5.45-.098 8.86-4.87 12.17-9.74 3.797-5.55 5.35-10.906 5.448-11.2-.097-.097-10.5-4.092-10.608-16.07-.098-10.03 8.176-14.8 8.566-15.096-4.672-6.9-11.973-7.7-14.504-7.886m41.54-9.234v13.23h10.637v8.732H89.46V63c0 4.815 2.117 7.038 6.773 7.038a35.56 35.56 0 003.811-.265v8.784c-1.27.265-3.8.477-6.298.477-11.007 0-15.293-4.234-15.293-14.923V31.874h-8.15v-8.732h8.15V9.913H89.46zM137.323 78.6h-11.68l-19.645-55.44h11.628l13.778 44.552h.265l13.78-44.552h11.415z"></path>
              </svg>
              <div className="title">Watch shows here and on TV.</div>
              <p className="m-y-20">
                Find Apple TV+ in the TV app, available on your Apple devices,
                smart TVs, the web, and more.
              </p>
              <div className="feature-logos center-text">
                <div>
                  <img alt="logos" src="/assets/photos/futered-in-logos.png" />
                </div>
                <div className="sec-title">Enjoy on the go.</div>
                <div class="linked-text">
                  <a class="m-r-10" href="#">
                    All the ways to watch Apple TV+{" "}
                  </a>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    class="svg-inline--fa fa-chevron-right chev-r"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    ></path>
                  </svg>
                </div>
                <div className="iphone">
                  <div className="container">
                    <ul className="flex-x">
                      <li className="col-3">
                        <img
                          alt="iphone"
                          src="/assets/photos/iphone/iphone.svg"
                        />
                        <div className="caption">iPhone</div>
                      </li>
                      <li className="col-3">
                        <img alt="ipad" src="/assets/photos/iphone/ipad.svg" />
                        <div className="caption">iPad</div>
                      </li>
                      <li className="col-3">
                        <img
                          alt="macWindows"
                          src="/assets/photos/iphone/macWindows.svg"
                        />
                        <div className="caption">Mac & Windows</div>
                      </li>
                      <li className="col-3">
                        <img
                          alt="airPlay"
                          src="/assets/photos/iphone/airPlay.svg"
                        />
                        <div className="caption">AirPlay</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordions">
                  <div className="container">
                    <Collapse
                      expandIconPosition="right"
                      className="accordion"
                      items={[
                        {
                          key: "1",
                          label: "What is Apple TV+?",
                          children: (
                            <p>
                              Apple TV+ is a streaming service from Apple.It
                              features exclusive Apple Original shows.
                            </p>
                          ),
                        },
                      ]}
                      style={{
                        background: "#fff",
                        marginTop: "100px",
                        fontSize: "2rem ",
                        textAlign: "left",
                        border: "1px solid rgba(205, 205, 205, 0.5)",
                      }}
                    />
                    <Collapse
                      expandIconPosition="right"
                      className="accordion"
                      items={[
                        {
                          key: "1",
                          label: "How much does Apple TV+ cost?",
                          children: (
                            <p>
                              Prices may vary depending on the offer
                              selected.(1) When you purchase an Apple device
                            </p>
                          ),
                        },
                      ]}
                      style={{
                        background: "#fff",
                        fontSize: "2rem ",
                        textAlign: "left",
                        border: "1px solid rgba(205, 205, 205, 0.5)",
                      }}
                    />
                    <Collapse
                      expandIconPosition="right"
                      className="accordion"
                      items={[
                        {
                          key: "1",
                          label: "Can I get Apple TV+ for free?",
                          children: (
                            <p>
                              If you recently purchased Apple hardware that
                              includes a free trial of Apple TV+
                            </p>
                          ),
                        },
                      ]}
                      style={{
                        background: "#fff",
                        fontSize: "2rem ",
                        textAlign: "left",
                        border: "1px solid rgba(205, 205, 205, 0.5)",
                      }}
                    />{" "}
                    <Collapse
                      expandIconPosition="right"
                      className="accordion"
                      items={[
                        {
                          key: "1",
                          label: "Where can I watch Apple TV+?",
                          children: (
                            <p>
                              The Apple TV app is available on many of your
                              favorite Apple devices.
                            </p>
                          ),
                        },
                      ]}
                      style={{
                        background: "#fff",
                        fontSize: "2rem ",
                        textAlign: "left",
                        border: "1px solid rgba(205, 205, 205, 0.5)",
                      }}
                    />{" "}
                    <Collapse
                      expandIconPosition="right"
                      className="accordion"
                      items={[
                        {
                          key: "1",
                          label:
                            "What shows and movies can I watch on Apple TV+?",
                          children: (
                            <p>
                              Apple TV+ lets you watch Apple Original shows and
                              movies produced exclusively for Apple.
                            </p>
                          ),
                        },
                      ]}
                      style={{
                        background: "#fff",
                        fontSize: "2rem ",
                        textAlign: "left",
                        border: "1px solid rgba(205, 205, 205, 0.5)",
                      }}
                    />
                    <Collapse
                      expandIconPosition="right"
                      className="accordion"
                      items={[
                        {
                          key: "1",
                          label: "Can I share Apple TV+ with my family?",
                          children: (
                            <p>
                              Yes.With Apple TV+ you can share your subscription
                              with up to five family members.
                            </p>
                          ),
                        },
                      ]}
                      style={{
                        background: "#fff",
                        fontSize: "2rem ",
                        textAlign: "left",
                        border: "1px solid rgba(205, 205, 205, 0.5)",
                        marginBottom: "100px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
//
