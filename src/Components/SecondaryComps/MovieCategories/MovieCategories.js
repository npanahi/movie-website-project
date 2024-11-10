import { Link } from "react-router-dom";
import { Style } from "./MovieCategoriesStyle";
import React from "react";

export default function MovieCategories() {
  return (
    <Style>
      <ul className="categories">
        <li>
          <Link to={`../../movie`}>
            <div className="img-wrapper">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/dd/bc/78/ddbc78cc-471e-b5b4-fa93-3ae6405b81a6/5e429832-bfa3-45b9-8edd-54572ffe0a91.lsr/670x377.webp"
                alt="categories"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link to={`../../movie`}>
            <div className="img-wrapper">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/5a/22/a1/5a22a16c-3cf6-40e7-ca53-fdc92ff12949/a223745a-e2af-499d-adb4-2381db4ad471.lsr/670x377.webp"
                alt="categories"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link to={`../../movie`}>
            <div className="img-wrapper">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/a7/22/06/a722068e-c62b-bdee-b583-d5e7f4e4ba28/52d46995-94c3-41d8-b77b-c9ab88fb5e63.lsr/670x377.webp"
                alt="categories"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link to={`../../movie`}>
            <div className="img-wrapper">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/98/6b/ca/986bca3f-cad5-e203-de89-7b76ce65959e/ac0f729f-393e-43c9-93b2-33fc843da1fb.lsr/670x377.webp"
                alt="categories"
              />
            </div>
          </Link>
        </li>

        <li>
          <Link to={`../../movie`}>
            <div className="img-wrapper">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/f4/24/a3/f424a346-3895-df24-1ec2-b41ac742e746/3a5423fb-c08d-4f31-86f7-1defc4733e9f.lsr/670x377.webp"
                alt="categories"
              />
            </div>
          </Link>
        </li>
      </ul>
    </Style>
  );
}
