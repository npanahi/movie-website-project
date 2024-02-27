import { Button } from "antd";
import { Style } from "./ButtonPriStyle";
export default function ButtonPrimary({ text }) {
  return (
    <Style>
      <div className="btn-primery">
        <span>
          <Button size="large">{text}</Button>
        </span>
      </div>
    </Style>
  );
}
