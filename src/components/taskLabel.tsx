import { useState } from "react";
import { motion } from "framer-motion";

export default function TaskLabel() {
  const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)}>
      <motion.label
        className={`${
          done ? "text-gray-700" : "text-black"
        } relative ml-5 delay-200`}
      >
        Task Label
        <motion.span
          className={` ${
            done ? "bg-gray-700" : "bg-black"
          } absolute left-0 w-full h-0.5 translate-y-1/2 top-1/2`}
          initial={{ width: 0 }}
          animate={{ width: done ? "100%" : 0 }}
          transition={{ duration: 0.1 }}
        ></motion.span>
      </motion.label>
    </div>
  );
}
