import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Style } from "./HeaderSecStyle";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
export default function HeaderSec() {
  return (
    <Style>
      <div className="header">
        <div className="sec-container">
          <ul className="nav-list flex-x align-center space-between">
            <li>
              <a href="#" target="-blank">
                <img src="/assets/photos/header/apple-logo.svg" />
              </a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Mac</a>
            </li>
            <li>
              <a href="#">iPad</a>
            </li>
            <li>
              <a href="#">iPhone</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="#">AirPods</a>
            </li>
            <li>
              <a href="#">TV & Home</a>
            </li>
            <li>
              <a href="#">Entertainment</a>
            </li>
            <li>
              <a href="#">Zubehör</a>
            </li>
            <li>
              <a href="#">Suport</a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="icon" icon={faBagShopping} />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
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
    </Style>
  );
}
