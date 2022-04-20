import "./stake.css";

import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Title() {
  return (
    <>
      <div
        className={
          "text-white w-screen h-screen flex items-center justify-center"
        }
      >
        <div className="stake_left">
          <div className="title">Step1</div>
          <div className="text-white">Get the stake you want</div>
        </div>
        <div className="stake_center">
          <div className="title">Step2</div>
          <div className="text-white">
            Proceed with delegation to citism.dev according to the staking
            guide.
          </div>
        </div>
        <div className="stake_right">
          <div className="title">Step3</div>
          <div className="text-white">Get rewarded or re-stake again.</div>
        </div>
      </div>
    </>
  );
}
