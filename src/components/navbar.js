import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-[#151028] fixed shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center"
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
      <div className="w-full block flex-grow flex justify-around items-center w-auto">
        <div className="flex items-center text-white ml-10">
          <span className="font-semibold text-2xl ml-3">CITISM</span>
        </div>
        <div className="text-sm "></div>
        <div>
          <a
            href="https://github.com/citismTeam/citisimWeb"
            className="inline-block text-sm px-6 py-2 leading-none text-white hover:text-violet-900 mt-4"
          >
            Github
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
