import FooterPri from "../../SecondaryComps/Footer/FooterPrimary/FooterPri";
import HeaderPri from "../../SecondaryComps/Header/HeaderPrimary/HeaderPri";
import "./PrimaryHFStyle";
export default function PrimaryHF(props) {
  return (
    <>
      <HeaderPri />
      {props.children}
      <FooterPri />
    </>
  );
}
