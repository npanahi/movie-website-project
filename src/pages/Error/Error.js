import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";
import { Style } from "./ErrorStyle";
export default function Error() {
  return (
    <Style>
      <PrimaryHeaderFooter>
        <div className="container">
          <h1>The page you’re looking for cannot be found.</h1>
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
