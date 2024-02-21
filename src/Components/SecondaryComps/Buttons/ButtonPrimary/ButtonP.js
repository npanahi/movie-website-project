import { Button } from "antd";
import { Style } from "./ButtonPStyle";
export default function ButtonP(text) {
  return (
    <Style>
      <div className="btn-primery">
        <a href="#">
          <Button
            type="primary"
            shape="round"
            size="small"
            className="btn btn-primery"
          >
            Register
          </Button>
        </a>
      </div>
    </Style>
  );
}
