import "./technology.css";
import Dropdown from "../components/dropdown";

import "tailwindcss/tailwind.css";
// import { motion } from "framer-motion";
import classNames from "classnames";

export default function Title() {
  return (
    <>
      <div className="technology_container">
        <div className="tech_title_container">
          <div
            className={classNames("technology_title", "md:text-6xl text-3xl")}
          >
            Technology
          </div>
        </div>
        <div className="tech_container">
          <Dropdown />
        </div>
      </div>
    </>
  );
}
