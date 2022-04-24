import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-[#222222] fixed shadow-md  z-50 w-full px-5 py-2 flex justify-around items-center"
      initial={{
        opacity: 0,
        y: -70,
      }}
      animate={{
        duration: 1,
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <div className="flex items-center text-white">
        <span className="font-semibold text-2xl">CITISM</span>
      </div>
      <div className="text-sm "></div>
      <motion.div className="text-lg my-3 text-white hover:text-blue-600">
        <a href="https://github.com/citismTeam" target="_blank" rel="noreferrer">
          Github
        </a>
      </motion.div>
    </motion.nav>
  );
}
