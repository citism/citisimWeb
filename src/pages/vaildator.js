import "./validator.css";
import NodeAnimation from "../components/node_animation";

import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Title() {
  return (
    <>
      <div
        className={
          "text-white w-screen h-screen flex items-center justify-center flex-col-reverse md:flex-row"
        }
      >
        <div
          className={classNames(
            "validator_left",
            "w-10/12 md:w-4/12 h-2/3 md:h-1/2"
          )}
        >
          <div
            className={classNames("validator_title", "md:text-6xl text-3xl")}
          >
            What is <span className="title_acc">validator</span> ?
          </div>
          <div className="text-gray-400 text-base white-space: pre-wrap;">
            Validators run full nodes, participate in consensus <br />
            by broadcasting votes, commit new blocks to the blockchain,
            <br /> and participate in governance of the blockchain.
            <br /> Validators are able to cast votes on behalf of their
            delegators.
            <br /> A validator’s voting power is weighted according to their
            total stake.
          </div>
        </div>
        <div
          className={classNames(
            "validator_right",
            "w-10/12 md:w-4/12 h-2/3 md:h-1/2"
          )}
        >
          <NodeAnimation />
        </div>
      </div>
    </>
  );
}
