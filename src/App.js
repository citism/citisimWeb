import Card from "./components/card";
import Navbar from "./components/navbar";
import Title from "./pages/title";
import Node from "./pages/vaildator";
import Stake from "./pages/stake";
import Technology from "./pages/technology";
import Network from "./pages/network";

import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <>
      <div className="test snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="snap-start h-screen ">
          <Navbar />
          <Title />
        </div>
        <div className="snap-start w-screen h-screen ">
          <Node />
        </div>
        <div className="snap-start w-screen h-screen ">
          <Stake />
        </div>
        <div className="snap-start w-screen h-screen ">
          <Technology />
        </div>
        <div className="snap-start w-screen h-screen ">
          <Network />
        </div>
      </div>
    </>
  );
}
