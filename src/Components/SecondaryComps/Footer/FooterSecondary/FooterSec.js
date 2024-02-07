import { Style } from "./FooterSecStyle";
export default function FooterSec() {
  return (
    <Style>
      <div className="footer">
        <div className="sec-container">
          <div className="footer-wrapper">
            <div className="text">
              This website contains content, comments and opinions submitted by
              users and is for informational purposes only. Apple may provide or
              recommend answers as a possible solution based on the information
              provided; However, because any potential problem may be due to
              multiple factors that have not been addressed in detail in the
              captured conversations of an electronic forum, Apple cannot
              guarantee that the solutions suggested in the community forums
              will produce the desired result. Apple disclaims any liability for
              the acts, omissions or conduct of any third party in connection
              with or relating to your use of the Site. All contributions to and
              use of content on this site are subject to the
              <a href="#"> Apple Support Community Terms of Service </a> .
              <a href="#">This is how your data is managed…</a>
            </div>
            <div className="bread-crumb-box">
              <ul className="bread-crumb-list flex-x align-center gap-30">
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
              <p>
                Further shopping options: in the
                <a href="#"> Apple Store </a>, on 0800 2000 136 or at a
                <a href="#"> retailer </a>
                near you.
              </p>
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
      </div>
    </Style>
  );
}
