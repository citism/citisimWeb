import "./title_text.scss";
import classNames from "classnames";

export default function Text() {
  return (
    <div
      className={classNames("glitch", "md:text-6xl text-2xl")}
      width="100%"
      height="100%"
      data-text="THE CITISM TEAM"
    >
      THE CITISM TEAM
    </div>
  );
}
