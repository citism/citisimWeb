import "./stake.css";

import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Title() {
  return (
    <>
      <div className="stake_container">
        <div className={classNames("stake_title", "md:text-6xl text-3xl")}>
          How To <span className="text-[#1C41E7]">Stake</span>
        </div>
        <div className="text-gray-400 text-base text-xs md:text-lg white-space: pre-wrap; text-center">
          Staking increases a validator’s weight, which helps them,
          <br />
          and in return delegators get rewarded.
        </div>
        <div className={classNames("step_container", "bg_animation")}>
          <div className="stake_left">
            <div className="img_container">
              <div
                className={classNames(
                  "stake_img1",
                  "md:w-28 md:h-32 w-16 h-20"
                )}
              ></div>
            </div>
            <div className={classNames("step_title", "md:text-3xl text-lg")}>
              Step1
            </div>
            <div
              className={classNames(
                "step_sub",
                "text-gray-400 md:text-gray-400 text-xs md:text-lg text-center"
              )}
            >
              Get the stake you want
            </div>
          </div>
          <div className="stake_center">
            <div className="img_container">
              <div
                className={classNames(
                  "stake_img2",
                  "md:w-28 md:h-32 w-20 h-24"
                )}
              ></div>
            </div>
            <div className={classNames("step_title", "md:text-3xl text-lg")}>
              Step2
            </div>
            <div
              className={classNames(
                "step_sub",
                "text-gray-400 md:text-gray-400 text-xs md:text-lg text-center"
              )}
            >
              Proceed with delegation to citism.
            </div>
          </div>
          <div className="stake_right">
            <div className="img_container">
              <div
                className={classNames(
                  "stake_img3",
                  "md:w-28 md:h-32 w-16 h-20"
                )}
              ></div>
            </div>
            <div className={classNames("step_title", "md:text-3xl text-lg")}>
              Step3
            </div>
            <div
              className={classNames(
                "step_sub",
                "text-gray-400 md:text-gray-400 text-xs md:text-lg text-center"
              )}
            >
              Get rewarded or re-stake again.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
