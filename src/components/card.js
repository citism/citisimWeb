import "./card.css";
import "tailwindcss/tailwind.css";
import mediImg from "../assets/networks/medibloc/medibloc.png";
import { motion } from "framer-motion";

export default function Card() {
  return (
    <>
      <div class="networkHeader"></div>
      <div class="cardMain">
        <div class="card">
          <div class="cardContent">
            <img src={mediImg} width="40%" alt="medibloc" />
            <div className="text-m mt-2">Mediblock</div>

            <a
              href="https://www.mintscan.io/medibloc/validators/panaceavaloper1gvsgxrcv4uuqgxas5nq538f7hydg46mjx6lvuu"
              target="_blank"
    rel="noreferrer"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="cardViewButton"
              >
                View
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
