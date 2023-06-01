import { motion } from "framer-motion";

interface TaskProps {
  isDone: boolean;
}

export default function TaskLabel({ isDone }: TaskProps) {
  return (
    <div>
      <motion.label
        className={`${
          isDone ? "text-gray-600" : "text-black"
        } relative ml-3 delay-200`}
      >
        Task Label
        <motion.span
          className={` ${
            isDone ? "bg-gray-600" : "bg-black"
          } absolute left-0 w-full h-0.5 translate-y-1/2 top-1/2`}
          initial={{ width: 0 }}
          animate={{ width: isDone ? "100%" : 0 }}
          transition={{ duration: 0.1 }}
        ></motion.span>
      </motion.label>
    </div>
  );
}
