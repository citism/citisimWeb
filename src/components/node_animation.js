import { ReactComponent as Testa } from "./node_animation.svg";
import "./style.scss";
import classNames from "classnames";

export default function Test() {
  return (
    <div class={classNames("block", "h-full md:h-1/12")}>
      <Testa width="90%" height="100%" />
    </div>
  );
}
