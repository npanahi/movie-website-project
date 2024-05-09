import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Style } from "./ContactUsStyle";
import { Input } from "antd";
import TernaryHF from "../../Components/Layout/TernaryHF/TernaryHF";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function ContactUs() {
  usePageTitle("Contact Us");

  return (
    <Style>
      <TernaryHF>
        <div className="hero">
          <div>
            <img
              src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_heros/hero-banner-tv.image.large_2x.jpg"
              alt="apple"
            />
          </div>
        </div>
        <div className="suppport">
          <div className="sec-container">
            <h1>TV support</h1>
            <ul className="flex-x align-center">
              <li className="col-3">
                <div className="img-wrapper">
                  <img
                    src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/nav-icon-subscriptions_2x.svg"
                    alt="apple"
                  />
                </div>
                <div className="linked-text">
                  <a className="m-r-10" href="#">
                    Billing and Subscriptions
                  </a>
                  <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                </div>
              </li>
              <li className="col-3">
                <div className="img-wrapper">
                  <img
                    src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/nav-icon-apple-tv_2x.svg"
                    alt="apple"
                  />
                </div>
                <div className="linked-text">
                  <a className="m-r-10" href="#">
                    Support for Apple TV
                  </a>
                  <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                </div>
              </li>{" "}
              <li className="col-3">
                <div className="img-wrapper">
                  <img
                    src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/nav-icon-airplay-video_2x.svg"
                    alt="apple"
                  />
                </div>
                <div className="linked-text">
                  <a className="m-r-10" href="#">
                    Stream video with AirPlay
                  </a>
                  <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                </div>
              </li>{" "}
              <li className="col-3">
                <div className="img-wrapper">
                  <img
                    src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/nav-icon-homepod-mini_2x.svg"
                    alt="apple"
                  />
                </div>
                <div className="linked-text">
                  <a className="m-r-10" href="#">
                    Support for HomePod
                  </a>
                  <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-block">
          <div className="sec-container">
            <ul className="flex-x card">
              <li className="col-5">
                <div className="img-wrapper">
                  <img
                    src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-sm-apple-tv_2x.png"
                    alt="apple"
                  />
                </div>
                <div className="text">
                  <div className="title">Use the Apple TV app</div>
                  <p className="m-t-15">
                    Watch movies, TV shows and live content or subscribe to
                    premium channels.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Support for Apple TV
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                    <div className="m-t-5">
                      {" "}
                      <a className="m-r-10" href="#">
                        Watch now
                      </a>
                      <FontAwesomeIcon
                        className="chev-r"
                        icon={faChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-5">
                <div className="img-wrapper">
                  <img
                    src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-sm-tv-plus_2x.png"
                    alt="apple"
                  />
                </div>
                <div className="text">
                  <div className="title">Subscribe to Apple TV+</div>
                  <p className="m-t-15">
                    Watch the latest Apple Originals on-demand across all your
                    devices in the Apple TV app.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Subscribe to Apple TV+
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                    <div className="m-t-5">
                      <a className="m-r-10" href="#">
                        Stream movies and TV shows
                      </a>
                      <FontAwesomeIcon
                        className="chev-r"
                        icon={faChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="single-content">
              <div className="content-wrapper col-5">
                <div className="img-wrapper">
                  <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-md-apple-tv_2x.png" />
                </div>
                <div className="text">
                  <div className="title">View anywhere</div>
                  <p className="m-t-15">
                    Buy or rent movies and TV shows and watch them on any of
                    your devices with the Apple TV app.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Buy films and content{" "}
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                    <div className="m-t-5">
                      {" "}
                      <a className="m-r-10" href="#">
                        Rent films{" "}
                      </a>
                      <FontAwesomeIcon
                        className="chev-r"
                        icon={faChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="flex-x m-t-50 card">
              <li className="col-5">
                <div className="img-wrapper">
                  <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-sm-tv_2x.png" />
                </div>
                <div className="text">
                  <div className="title">
                    Download the Apple TV app or Apple TV+ app
                  </div>
                  <p className="m-t-15">
                    Learn how to set up the Apple TV or Apple TV+ app on a
                    compatible smart TV, streaming device, or game console.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Further information
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                  </div>
                </div>
              </li>
              <li className="col-5">
                <div className="img-wrapper">
                  <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/content-block-sm-captions-icon_2x.png" />
                </div>
                <div className="text">
                  <div className="title">Accessibility</div>
                  <p className="m-t-15">
                    Customize your viewing experience with subtitles, scene
                    descriptions and audio content.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Learn more about accessibility features
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                    <div className="m-t-5">
                      <a className="m-r-10" href="#">
                        Stream movies and TV shows
                      </a>
                      <FontAwesomeIcon
                        className="chev-r"
                        icon={faChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="search m-t-50">
          <div className="sec-container">
            <h1>Search for more topics</h1>
            <Input
              size="large"
              placeholder="Browse support"
              prefix={
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              }
              className="input"
            />
            <ul className="flex-x card">
              <li className="col-4">
                <div className="img-wrapper">
                  <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-sm-communities_2x.png" />
                </div>
                <div className="text">
                  <div className="title">Apple Communities</div>
                  <p className="m-t-15">
                    Find answers, ask questions, and connect with other Apple
                    users.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Ask or search now
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                  </div>
                </div>
              </li>
              <li className="col-4">
                <div className="img-wrapper">
                  <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-sm-support_2x.png" />
                </div>
                <div className="text">
                  <div className="title">Get support</div>
                  <p className="m-t-15">
                    We can help you find the best support options.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Start now
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                  </div>
                </div>
              </li>
              <li className="col-4">
                <div className="img-wrapper">
                  <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-sm-supportapp_2x.png" />
                </div>
                <div className="text">
                  <div className="title">Support app</div>
                  <p className="m-t-15">
                    Get personalized access to solutions for your Apple
                    products.
                  </p>
                  <div className="linked-text">
                    <a className="m-r-10" href="#">
                      Download the Apple Support app
                    </a>
                    <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
                  </div>
                </div>
              </li>
            </ul>
            <div className="linked-text center-text m-b-50">
              <a className="m-r-10" href="#">
                Report a problem with content in the Apple TV app
              </a>
              <FontAwesomeIcon className="chev-r" icon={faChevronRight} />
            </div>
          </div>
        </div>
        {/* <div className="footer">
          <div className="sec-container">
            <div className="footer-wrapper">
              <div className="bread-crumb-box">
                <ul className="bread-crumb-list flex-x align-center gap-10">
                  <li className="apple-logo">
                    <a href="#"></a>
                  </li>
                  <li className="item">
                    <a href="#">Support</a>
                  </li>
                  <li className="item">
                    <a href="#">Community</a>
                  </li>
                </ul>
                <div className="directory-clmn">
                  <div className="clmn-wrapper flex-x">
                    <div className="clm col-3">
                      <h4>Product support</h4>
                      <ul>
                        <li className="m-b-10">
                          <a href="#">iPhone</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Mac</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">iPad</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Watch</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">AirPods</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Music</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">TV</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Support sitemap</a>
                        </li>
                      </ul>
                    </div>
                    <div className="clm col-3">
                      <h4>Service and repair</h4>
                      <ul>
                        <li className="m-b-10">
                          <a href="#">Apple device repair options</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Information about service and repairs</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">AppleCare products</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Hardware warranty</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Software license agreements</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Free support</a>
                        </li>
                      </ul>
                    </div>
                    <div className="clm col-3">
                      <h4>resources</h4>
                      <ul>
                        <li className="m-b-10">
                          <a href="#">My support</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Downloads</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Manuals</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Technical data</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Accessibility</a>
                        </li>
                      </ul>
                    </div>
                    <div className="clm col-3">
                      <h4>Contact</h4>
                      <ul>
                        <li className="m-b-10">
                          <a href="#">Contact support</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Telephone numbers</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Support app</a>
                        </li>
                        <li className="m-b-10">
                          <a href="#">Apple Communities</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copy-right flex-x space-between">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
                <ul className="flex-x">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Use of cookies</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Sales and refunds</a>
                  </li>
                  <li>
                    <a href="#">Legal Notice</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
                <div className="country">
                  <a href="#">Germany</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* </SecondaryHF> */}
      </TernaryHF>
    </Style>
  );
}
