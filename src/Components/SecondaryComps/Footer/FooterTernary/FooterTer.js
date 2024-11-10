import { Style } from "./FooterTerStyle";
import React from "react";

export default function FooterTer() {
  return (
    <Style>
      <div className="footer">
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
      </div>
    </Style>
  );
}
