import "./technology.css";
import Dropdown from "../components/dropdown";

import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Title() {
  return (
    <>
      <div className="technology_container">
        <div className="technology_title">Technology</div>

        <div className="step_container">
          <Dropdown />
        </div>
      </div>
    </>
  );
}
