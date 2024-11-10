import FooterPri from "../../SecondaryComps/Footer/FooterPrimary/FooterPri";
import HeaderPri from "../../SecondaryComps/Header/HeaderPrimary/HeaderPri";
import { Style } from "./PrimaryHFStyle";
import React from "react";

export default function PrimaryHeaderFooter(props) {
  return (
    <Style>
      <HeaderPri onChange={props.onChange} query={props.query} />
      <div className="space">{props.children}</div>
      <FooterPri className={props.className} />
    </Style>
  );
}
