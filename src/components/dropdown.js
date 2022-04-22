import "./dropdown.css";
import { useState } from "react";
import classNames from "classnames";

export default function Text() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="tech">
        {data.map((item, i) => (
          <div className="item">
            <div
              className={classNames("drop_title", "md:text-2xl text-lg")}
              onClick={() => toggle(i)}
            >
              <div>{item.title}</div>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "What is a full node?",
    description:
      "A full node is a program that validates the transactions and blocks of a blockchain. Validators must run full nodes. Full nodes require more resources than light nodes, which only processes block headers and a small subset of transactions. Running a full node means you are running a non-compromised and up-to-date version of the Terra Core software with low network latency and no downtime.",
  },
  {
    title: "What is staking?",
    description:
      "they are staking. Staking increases a validator’s weight, which helps them, and in return delegators get rewarded. A blockchain validator is someone who is responsible for verifying transactions on a blockchain This mechanism helps secure the network by imposing the need to lock up value in the network in order to participate in the consensus decisions.",
  },
  {
    title: "what is a delegators?",
    description:
      "Delegators share the benefits and rewards of staking with their Validator. If a Validator is successful, its delegators will consistently share in the rewards structure.",
  },
];
