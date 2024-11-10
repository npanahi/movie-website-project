import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import { Style } from "./ErrorStyle";
import { usePageTitle } from "../../hooks/usePageTitle";
import React from "react";

export default function Error() {
  usePageTitle("Error 404");
  return (
    <Style>
      <PrimaryHeaderFooter>
        <div className="container">
          <h1>The page you’re looking for cannot be found.</h1>
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
