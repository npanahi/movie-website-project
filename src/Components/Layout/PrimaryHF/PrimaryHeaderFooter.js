import FooterPri from "../../SecondaryComps/Footer/FooterPrimary/FooterPri";
import HeaderPri from "../../SecondaryComps/Header/HeaderPrimary/HeaderPri";

export default function PrimaryHeaderFooter(props) {
  return (
    <>
      <HeaderPri />
      {props.children}
      <FooterPri />
    </>
  );
}
