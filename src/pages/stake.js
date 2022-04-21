import "./stake.css";

import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Title() {
  return (
    <>
      <div className="stake_container">
        <div className="stake_title">
          How To <span className="text-[#1C41E7]">Stake</span>
        </div>
        <div className="text-gray-400 text-base white-space: pre-wrap; text-center">
          Staking increases a validator’s weight, which helps them,
          <br />
          and in return delegators get rewarded.
        </div>
        <div className="step_container">
          <div className="stake_left">
            <div className="stake_img"></div>
            <div className="step_title">Step1</div>
            <div className="text-gray-400">Get the stake you want</div>
          </div>
          <div className="stake_center">
            <div className="step_title">Step2</div>
            <div className="text-gray-400">
              Proceed with delegation to citism.
            </div>
          </div>
          <div className="stake_right">
            <div className="step_title">Step3</div>
            <div className="text-gray-400">Get rewarded or re-stake again.</div>
          </div>
        </div>
      </div>
    </>
  );
}
