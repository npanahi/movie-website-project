import { Style } from "./FooterPriStyle";
export default function FooterPri() {
  return (
    <Style className="footer">
      <div className="container">
        <div className="global-footer flex-x space-between">
          <div className="global-footer-left">
            <div className="m-b-10">
              Copyright © 2024{" "}
              <a
                href="https://www.apple.com/de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Inc.
              </a>
              All rights reserved.
            </div>
            <div>
              <a
                target="_blank"
                href="https://www.apple.com/de/legal/internet-services/ "
                rel="noopener noreferrer"
              >
                Terms of Use for Internet Services
              </a>
              <a
                target="_blank"
                href="https://www.apple.com/de/legal/privacy/data/de/apple-tv-app/"
                rel="noopener noreferrer"
                className="m-l-15"
              >
                Apple TV and data protection
              </a>
              <a
                target="_blank"
                href="https://www.apple.com/de/legal/privacy/de-ww/cookies/"
                rel="noopener noreferrer"
                className="m-l-15"
              >
                Cookie Policy
              </a>
              <a
                target="_blank"
                href="https://support.apple.com/de-de/tv"
                rel="noopener noreferrer"
                className="m-l-15"
              >
                Support
              </a>
            </div>
          </div>
          <div className="global-footer-right">
            <a className="country ">Germany</a>
            <a className="language m-l-15">English (UK)</a>
          </div>
        </div>
      </div>
    </Style>
  );
}
