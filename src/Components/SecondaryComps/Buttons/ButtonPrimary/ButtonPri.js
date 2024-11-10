import { Button } from "antd";
import { Style } from "./ButtonPriStyle";
import React from "react";

export default function ButtonPrimary({ text }) {
  return (
    <Style>
      <div className="btn-primery">
        <span>
          {/* <Button size="large">{text}</Button> */}
          <button>{text}</button>
        </span>
      </div>
    </Style>
  );
}
