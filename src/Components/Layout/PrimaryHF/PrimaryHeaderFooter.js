import FooterPri from "../../SecondaryComps/Footer/FooterPrimary/FooterPri";
import HeaderPri from "../../SecondaryComps/Header/HeaderPrimary/HeaderPri";
import { Style } from "./PrimaryHFStyle";
export default function PrimaryHeaderFooter(props) {
  return (
    <Style>
      <HeaderPri onChange={props.onChange} />
      <div className="space">{props.children}</div>
      <FooterPri className={props.className} />
    </Style>
  );
}
