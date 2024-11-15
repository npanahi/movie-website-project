import { Link, useParams, NavLink, useNavigate } from "react-router-dom";
import { Style } from "./HeaderPriStyle";
import React from "react";

export default function HeaderPri(props) {
  const navigate = useNavigate();
  const onChangeLocal = function (e) {
    props.onChange(e.target.value);
  };
  return (
    <Style className="header">
      <div className="nav-bar container flex-x align-center ">
        <div className="nav">
          <ul className=" flex-x gap-20 align-center">
            <li>
              <div className="open_tv_logo">
                <svg
                  height="24"
                  viewBox="0 0 96 96"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="m90.3078 5.8876c-4.541-4.541-10.791-5.5176-19.6777-5.5176h-45.6054c-8.4961 0-14.795 1.0254-19.336 5.5176-4.4922 4.541-5.4687 10.791-5.4687 19.2871v45.3613c0 8.88673.9277 15.13673 5.4199 19.62892 4.5898 4.49218 10.8398 5.46878 19.6777 5.46878h45.3125c8.8867 0 15.1856-.9766 19.6777-5.46878 4.541-4.54101 5.469-10.74219 5.469-19.62892v-45.0683c0-8.8379-.928-15.0879-5.469-19.5801zm-.586 18.3105v47.6563c0 5.76169-.879 10.888647-3.8573 13.86716-2.9785 3.02735-8.1543 3.90625-13.916 3.90625h-47.9492c-5.7129 0-10.8887-.92773-13.916-3.90625-2.9786-2.978513-3.8086-8.10547-3.8086-13.86716v-47.3633c0-6.0547.83-11.2305 3.8086-14.209 2.9785-3.0273 8.2519-3.8574 14.2578-3.8574h47.6074c5.7617 0 10.9375.9277 13.916 3.9062 3.0273 2.9786 3.8573 8.0567 3.8573 13.8672zm-63.7694 13.1836c3.9551.4395 7.0801-3.9551 6.7871-7.4219-3.9551.1465-6.8848 3.711-6.7871 7.4219zm26.9531-5.0293h-5.0781v5.8106h-3.5156v3.955h3.5156v14.2579c0 4.9316 1.9531 6.6894 7.0312 6.6894 1.0743 0 2.295-.0976 2.6856-.1953v-4.1504c-.1953.1465-1.1231.1465-1.6113.1465-2.002 0-3.0274-.8301-3.0274-3.0762v-13.6719h4.7363v-3.955h-4.7363zm-13.4277 22.0215c-1.9043-.7812-3.0762-2.0508-3.8086-3.8086-.7813-1.9531-.5371-3.9062 0-5.5664.3418-1.123 1.123-2.4902 3.0273-3.6133-1.416-2.1484-3.6621-3.2226-6.2988-3.2226-3.0273 0-4.7851 1.5625-6.2988 1.5625-1.2696 0-2.6367-1.4649-5.0781-1.4649-2.6368 0-4.7364 1.0742-6.1524 2.8321-1.6601 2.0019-2.3437 4.5898-2.3437 7.1777 0 4.2969 1.9531 9.2285 4.7363 12.4023 1.416 1.6602 2.5879 2.4903 3.9551 2.4903 2.0019 0 3.125-1.4649 5.5175-1.4649 1.0254 0 1.9532.4395 2.5391.6348.9766.3906 1.6602.7324 2.832.7324 1.2207 0 2.1973-.4394 2.7832-1.0742 2.1973-2.0508 3.9063-5.0781 4.5899-7.6172zm34.9121 8.4961 8.9355-24.707h-5.5664l-6.0547 19.873-6.3476-19.873h-5.4199l9.1308 24.707z"
                    fill="rgba(235, 235, 245, 0.6)"
                  ></path>
                </svg>
              </div>
            </li>
            <li>
              <div className="movie-page">
                <NavLink
                  className="link"
                  to="/movie"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      // fontSize: isActive ? "1.6rem" : "1.4rem",
                      color: isPending ? "red" : "#8d8d92",
                      color: isActive ? "#fff" : "#8d8d92",
                    };
                  }}
                >
                  Movies{" "}
                </NavLink>
              </div>
            </li>
            <li>
              <div className="contact-us-page">
                <Link to={`/contact-us`} target="blank">
                  Contact us
                </Link>
              </div>
            </li>
            <li>
              <div className="about-us-page">
                <Link to={`/about-us`} target="blank">
                  About us
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="logo grow-1 center-text c-f">
          <Link to={"/"}>Apple TV+</Link>
        </div>
        <div className="search relative">
          <svg
            height="13"
            viewBox="0 0 64 64"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
            class="search-header__search-icon absolute"
            aria-hidden="true"
          >
            <path
              d="m26.72 50.414c5.205 0 10.005-1.683 13.932-4.488l14.773 14.773c.686.686 1.59 1.028 2.556 1.028 2.026 0 3.46-1.558 3.46-3.553 0-.935-.312-1.807-.998-2.493l-14.68-14.71c3.086-4.052 4.925-9.07 4.925-14.524 0-13.184-10.784-23.968-23.967-23.968-13.153 0-23.968 10.753-23.968 23.968 0 13.183 10.784 23.967 23.968 23.967zm0-5.174c-10.285 0-18.793-8.508-18.793-18.793 0-10.286 8.508-18.794 18.794-18.794 10.285 0 18.793 8.508 18.793 18.794 0 10.285-8.508 18.793-18.793 18.793z"
              fill="#8d8d92"
            ></path>
          </svg>
          <input
            name="query"
            placeholder="Seek"
            autocomplete="off"
            class="search-header__search-input"
            id="search-header-form-input-box"
            type="search"
            onChange={onChangeLocal}
            value={props.query}
            onClick={() => {
              !props.query && navigate("/search");
            }}
          />
          <svg
            viewBox="0 0 30 30"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            class="nav-header__auth-avatar "
            alt=""
          >
            <path
              d="M14.007 28C6.299 28 0 21.703 0 14S6.299 0 14.007 0C21.7 0 28 6.297 28 14s-6.299 14-13.993 14zm0-9.392c4.253 0 7.49 1.514 8.805 3.216 1.815-2.08 2.899-4.81 2.899-7.824 0-6.54-5.12-11.784-11.704-11.784C7.41 2.216 2.289 7.46 2.289 14c0 3.014 1.084 5.743 2.9 7.824 1.313-1.702 4.55-3.216 8.818-3.216zm-.014-2.297c-2.6-.027-4.646-2.19-4.646-5.095-.014-2.73 2.059-4.986 4.646-4.986 2.601 0 4.647 2.256 4.647 4.986 0 2.906-2.032 5.122-4.647 5.095z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>
    </Style>
  );
}
