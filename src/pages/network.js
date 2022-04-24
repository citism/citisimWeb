import "./network.css";
import Card from "../components/card";

import "tailwindcss/tailwind.css";
// import { motion } from "framer-motion";
import classNames from "classnames";
import Footer from "../components/footer";

export default function Network() {
  return (
    <>
      <div className="network_container">
        <div className={classNames("network_title", "md:text-6xl text-3xl")}>
          Networks
        </div>
        <Card />
        <Footer />
      </div>
    </>
  );
}
