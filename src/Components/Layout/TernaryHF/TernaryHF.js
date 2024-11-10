import FooterSec from "../../SecondaryComps/Footer/FooterSecondary/FooterSec";
import FooterTer from "../../SecondaryComps/Footer/FooterTernary/FooterTer";
import HeaderSec from "../../SecondaryComps/Header/HeaderSecondary/HeaderSec";
import HeaderTer from "../../SecondaryComps/Header/HeaderTernary/HeaderTer";
import React from "react";

export default function TernaryHF(props) {
  return (
    <>
      <HeaderTer />
      {props.children}
      <FooterTer />
    </>
  );
}
