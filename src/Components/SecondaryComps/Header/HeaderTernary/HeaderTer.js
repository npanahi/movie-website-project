import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Style } from "./HeaderTerStyle";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
export default function HeaderTer() {
  return (
    <Style>
      <div className="header">
        <div className="sec-container">
          <ul className="nav-list flex-x align-center space-between">
            <li class="apple-logo">
              <a href="#"></a>
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
    </Style>
  );
}
