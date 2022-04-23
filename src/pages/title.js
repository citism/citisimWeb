import "./title.css";

import "tailwindcss/tailwind.css";
import { ReactComponent as Mainimg } from "./title_img.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Text from "../components/title_text";

export default function Title() {
  return (
    <>
      <div
        className={classNames(
          "text-white w-screen h-screen z-0 flex items-center justify-center flex-col"
        )}
      >
        <div className="flex align-center justify-around align-center h-2/5 w-4/5">
          <div className="title_left">
            <Text />
            <div className="mb-32 mt-8 text-gray-400 ">
              The citism team believes in decentralization
              <br /> and contribute to the blockchain network <br /> and, Will
              participate in many blockchain ecosystems
            </div>
          </div>
          <div className="title_right h-full w-full">
            <Mainimg width="100%" height="65%" />
          </div>
        </div>
        <div className="w-3/4 flex align-center ml-20 ">
          <a href="https://docs.citism.dev/" target="_blank">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
              className={classNames("btn_primary", "md:w-32 md:h-11 w-24 h-10")}
            >
              Validator
            </motion.button>
          </a>
          <a href="https://github.com/citismTeam" target="_blank">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
              className={classNames(
                "btn_secondary",
                "md:w-32 md:h-11 w-24 h-10"
              )}
            >
              Docs
            </motion.button>
          </a>
        </div>
      </div>
    </>
  );
}
