import "./title.css";

import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Text from "../components/title_text";

export default function Title() {
  return (
    <>
      <div
        className={classNames(
          "bg_animation",
          "text-white w-screen h-screen z-0 flex items-center justify-center "
        )}
      >
        <div className="title_left">
          <Text />
          <div className="text-white mb-20">
            Varify transaction with citism!
          </div>
          <div>
            <button className="btn_primary">Validator</button>
            <button className="btn_secondary">Github</button>
          </div>
        </div>
        <div className="title_right"></div>
      </div>
    </>
  );
}
