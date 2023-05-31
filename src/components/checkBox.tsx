import { useState } from "react";
import { motion } from "framer-motion";

export default function CheckBox() {
  const [done, setDone] = useState(false);
  return (
    <motion.button
      onClick={() => setDone(!done)}
      animate={{ backgroundColor: done ? "blue" : "white" }}
      transition={{ duration: 0.1 }}
      className="flex items-center justify-center w-8 h-8 transition-all rounded-md "
    >
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: done ? 1 : 0 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        ></motion.path>
      </svg>
    </motion.button>
  );
}
