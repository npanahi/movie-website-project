import { React, Fragment } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Router from "./Components/Router";
import { GeneralStyle } from "./themes/GeneralStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <GeneralStyle />
    <Router />
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
