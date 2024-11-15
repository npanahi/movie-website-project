import React, { Fragment } from "react";
import reportWebVitals from "./reportWebVitals";
import Router from "./Components/Router";
import { GeneralStyle } from "./themes/GeneralStyle";
import { ConfigProvider } from "antd";
import { createRoot } from "react-dom/client";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(
  <Fragment>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#000",
          borderRadius: 4,

          // Alias Token
          colorBgContainer: "#fff",
        },
      }}
    >
      <GeneralStyle />
      <Router />
    </ConfigProvider>
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
