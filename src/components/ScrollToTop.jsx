import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  return (
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed
        bottom-40
        right-6
        z-50
        w-14
        h-14
        md:w-14
        md:h-14
        rounded-full
        bg-blue-700
        text-white
        shadow-xl
        hover:scale-110
        transition-all
        flex
        items-center
        justify-center
      "
    >
      <FaArrowUp />
    </motion.button>
  );
}