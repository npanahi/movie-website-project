import HeaderSec from "../../Components/SecondaryComps/Header/HeaderSecondary/HeaderSec";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
import { Style } from "./AboutUsStyle";
export default function AboutUS() {
  return (
    <Style>
      <HeaderSec />
      <div className="description ">
        <div className="sec-container">
          <div className="description-wrapper center-text">
            <h1>Apple Support Community</h1>
            <p>
              Find answers. Ask questions. Join our community of Apple users
              from around the world.
            </p>
            <div>
              <Input
                size="large"
                placeholder="Enter question"
                prefix={
                  <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                }
                className="input"
              />
            </div>
            <div className="linked-text">
              <a href="#">Learn more about the Apple Support Community </a>
              <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
            </div>
          </div>
          <img
            className="people"
            src="https://communities.apple.com/de20240123/public/assets/home/home-1042.jpg"
          />
          <p>Select your product to find suitable topics.</p>
        </div>
        <div className="product-list">
          <div className="sec-container">
            <ul className="flex-x space-between">
              <li>
                <img
                  className="product"
                  src="https://cdsassets.apple.com/live/I2F2FLC5/iphone/iphone-family.240x240.png"
                />
                <div>iPhone</div>
              </li>
              <li>
                <img
                  className="product"
                  src="https://cdsassets.apple.com/live/I2F2FLC5/mac/mac-desktops.240x240.png"
                />
                <div>Desktop-Computer</div>
              </li>
              <li>
                <img
                  className="product"
                  src="https://cdsassets.apple.com/live/I2F2FLC5/mac/mbp-notebooks.480x480.png"
                />
                <div>Notebooks</div>
              </li>
              <li>
                <img
                  className="product"
                  src="https://cdsassets.apple.com/live/I2F2FLC5/ipad/ipad-family.240x240.png"
                />
                <div>iPad</div>
              </li>
              <li>
                <img
                  className="product"
                  src="https://cdsassets.apple.com/live/I2F2FLC5/apple-watch/watch-family.240x240.png"
                />
                <div>Apple Watch</div>
              </li>
              <li>
                <img
                  className="product"
                  src="https://cdsassets.apple.com/live/I2F2FLC5/airpods/airpods-family.240x240.png"
                />
                <div>AirPods</div>
              </li>
            </ul>
            <div className="load-more m-t-30">
              <div className="flex-x align-center justify-center gap-10 ">
                <div>
                  <a href="#">Show more topics</a>
                </div>
                <div>
                  <a className="plus" href="#">
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="selected-tips">
        <div className="sec-container">
          <div className="title">
            <h1>Selected tips</h1>
            <p>Get insights from experienced community members.</p>
            <div class="linked-text">
              <a href="#">View all tips </a>
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
          </div>
          <div className="tips">
            <div className="img-wrapper">
              <img src="https://communities.apple.com/de/assets/avatar/1f55ef8fe90dab1e/a6dffc7e3d914bf695b111940b37fcffc73a5556ca5c4d33b2f5ab5a55931871" />
            </div>
            <div>
              <h2>
                iCloud Photo Library: What needs to be taken into account for
                the media library?
              </h2>
              <p className="topic">
                "iCloud Photo Library makes it very easy to sync libraries
                across devices. If..."
              </p>
              <div className="author"></div>
              <div className="level">
                <div className="lvl-lable">Level:Level 10</div>
                <img
                  className="lvl-img"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath d='M8.005 4.4c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845a1.16 1.16 0 00-.35-.856A1.152 1.152 0 008.006 2c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm-1.6 3.2c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm1.6 3.2c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm-3.2 0c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm4.8-3.2c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm1.6 3.2c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm1.6 3.2c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm-3.2 0c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm-3.2 0c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349zm-3.2 0c.33 0 .613-.116.846-.35.233-.232.349-.514.349-.845 0-.337-.116-.623-.35-.856a1.152 1.152 0 00-.845-.349c-.337 0-.623.116-.856.35a1.16 1.16 0 00-.349.855c0 .33.116.613.35.846.232.233.518.349.855.349z' fill='%23E97823' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E"
                ></img>
                <div className="points"></div>
              </div>
              <div class="linked-text">
                <a href="#">Read entire post</a>
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
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
