import FooterSec from "../../SecondaryComps/Footer/FooterSecondary/FooterSec";
import HeaderSec from "../../SecondaryComps/Header/HeaderSecondary/HeaderSec";

export default function SecondaryHF(props) {
  return (
    <>
      <HeaderSec />
      {props.children}
      <FooterSec />
    </>
  );
}
