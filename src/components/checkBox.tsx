import { motion } from "framer-motion";

interface CheckBoxProps {
  isDone: boolean;
}

export default function CheckBox({ isDone }: CheckBoxProps) {
  return (
    <motion.button
      animate={{ backgroundColor: isDone ? "#3b82f6" : "white" }}
      transition={{ duration: 0.1 }}
      className={`flex items-center justify-center w-6 h-6 transition-all rounded-md ${
        isDone ? "border-2 border-[#3b82f6]" : "border-2 border-gray-400"
      } `}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isDone ? 1 : 0 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        ></motion.path>
      </svg>
    </motion.button>
  );
}
