import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Input } from "antd";
import { Style } from "./AboutUsStyle";
import imgUrl from "../../helpers/globalVariables/img-path/bigImgUrl";
import SecondaryHF from "../../Components/Layout/SecondaryHF/SecondaryHF";
export default function AboutUS() {
  return (
    <Style>
      <SecondaryHF>
        <div className="sticky-header">
          <div className="sec-container">
            <div className="flex-wrapper flex-x space-between align-center">
              <div className="text">Community</div>
              <ul className="list flex-x align-center gap-25">
                <li>
                  <a href="#">Discover</a>
                </li>
                <li>
                  <a href="#">Seek</a>
                </li>
                <li>
                  <a href="#">
                    <Button type="primary" shape="round" size="small">
                      Register
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                    <FontAwesomeIcon
                      className="icon"
                      icon={faMagnifyingGlass}
                    />
                  }
                  className="input"
                />
              </div>
              <div className="linked-text">
                <a className="m-r-10" href="#">
                  Learn more about the Apple Support Community
                </a>
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
            <div className="tips-wrapper">
              <div className="title">
                <h1>Selected tips</h1>
                <p>Get insights from experienced community members.</p>
                <div class="linked-text">
                  <a className="m-r-10" href="#">
                    View all tips{" "}
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
              </div>
              <div className="tips flex-x justify-center ">
                <div className="img-wrapper">
                  <img src="https://communities.apple.com/de/assets/avatar/1f55ef8fe90dab1e/a6dffc7e3d914bf695b111940b37fcffc73a5556ca5c4d33b2f5ab5a55931871" />
                </div>
                <div className="text-wrapper">
                  <h2>
                    iCloud Photo Library: What needs to be taken into account
                    for the media library?
                  </h2>
                  <p className="topic">
                    "iCloud Photo Library makes it very easy to sync libraries
                    across devices. If..."
                  </p>
                  <div className="author-box flex-x ">
                    <div className="author">Leonie</div>
                    <div className="level flex-x align-center gap-5">
                      <div className="lvl-lable">Level 10</div>
                      <img className="lvl-img" src={imgUrl.triangleUrl}></img>
                      <div className="points">143,972 points</div>
                    </div>
                  </div>
                  <div class="linked-text">
                    <a className="m-r-10" href="#">
                      Read entire post
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
                </div>
              </div>
              <div className="tips flex-x justify-center ">
                <div className="img-wrapper">
                  <img src="https://communities.apple.com/de/public/assets/avatars/SYSTEM_DEFAULT_AVATAR_EN_1096.png" />
                </div>
                <div className="text-wrapper">
                  <h2>
                    Current software versions for iOS, iPadOS, watchOS, tvOS and
                    macOS
                  </h2>
                  <p className="topic">
                    "Hi, hello and welcome to the Apple Support Community. It's
                    nice that you're here, I hope it works..."
                  </p>
                  <div className="author-box flex-x ">
                    <div className="author">tobias501</div>
                    <div className="level flex-x align-center gap-5">
                      <div className="lvl-lable">Level 7</div>
                      <img className="lvl-img" src={imgUrl.pentagonUrl}></img>
                      <div className="points">22,834 points</div>
                    </div>
                  </div>
                  <div class="linked-text">
                    <a className="m-r-10" href="#">
                      Read entire post
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
                </div>
              </div>
              <div className="tips flex-x justify-center ">
                <div className="img-wrapper">
                  <img src="https://communities.apple.com/de/assets/avatar/1f55ef8fe90dab1e/a6dffc7e3d914bf695b111940b37fcffc73a5556ca5c4d33b2f5ab5a55931871" />
                </div>
                <div className="text-wrapper">
                  <h2>When entire key blocks no longer work</h2>
                  <p className="topic">
                    "The system settings in Accessibility can greatly change how
                    the keyboard responds to input..."
                  </p>
                  <div className="author-box flex-x ">
                    <div className="author">Leonie</div>
                    <div className="level flex-x align-center gap-5">
                      <div className="lvl-lable">Level 10</div>
                      <img className="lvl-img" src={imgUrl.triangleUrl}></img>
                      <div className="points">143,972 points</div>
                    </div>
                  </div>
                  <div class="linked-text">
                    <a className="m-r-10" href="#">
                      Read entire post
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="guide">
          <div className="sec-container">
            <div className="guid-wrapper">
              <div className="title">
                <div className="img-wrapper">
                  <img src={imgUrl.askIcon} />
                </div>
                <h1 className="center-text">New to the community?</h1>
                <div className="">
                  <Button type="primary" shape="round" size="larg">
                    Join Now
                  </Button>
                </div>
              </div>
              <div className="guide-box">
                <ul className="flex-x ">
                  <li className="col-4">
                    <div className="img-wrapper">
                      <img src={imgUrl.globe} />
                    </div>
                    <div className="text-wrapper">
                      <div>Find answers and ask questions</div>
                    </div>
                    <div class="linked-text">
                      <a className="m-r-10" href="#">
                        Search community
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
                  </li>
                  <li className="col-4">
                    <div className="img-wrapper ">
                      <img src={imgUrl.iconManage} />
                    </div>
                    <div className="text-wrapper">
                      <div>Manage which people and discussions you follow</div>
                    </div>
                    <div class="linked-text">
                      <a className="m-r-10" href="#">
                        Manage subscriptions
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
                  </li>
                  <li className="col-4">
                    <div className="img-wrapper ">
                      <img src={imgUrl.iconFun} />
                    </div>
                    <div className="text-wrapper">
                      <div>
                        Award points, reach higher levels and earn new
                        privileges
                      </div>
                    </div>
                    <div class="linked-text">
                      <a className="m-r-10" href="#">
                        Earn awards
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SecondaryHF>
    </Style>
  );
}
