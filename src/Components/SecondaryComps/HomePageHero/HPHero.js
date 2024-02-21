import { Style } from "./HPHeroStyle";
import { Button, Input } from "antd";

export default function HPHero() {
  return (
    <Style>
      <div className="container m-b-10">
        <div className="hero-wrapper relative">
          <div className="background-wrapper"></div>
          <div className="text-wrapper"></div>
        </div>
      </div>
    </Style>
  );
}
