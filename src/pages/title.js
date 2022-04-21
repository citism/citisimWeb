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
          <div className="text-white mb-20 mt-5 text-gray-400">
            The citism team believes in decentralization
            <br /> and contribute to the blockchain network <br /> and, Will
            participate in many blockchain ecosystems
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
              className="btn_primary"
            >
              Validator
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
              className="btn_secondary"
            >
              Github
            </motion.button>
          </div>
        </div>
        <div className="title_right"></div>
      </div>
    </>
  );
}
