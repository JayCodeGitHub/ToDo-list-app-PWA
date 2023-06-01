import { motion } from "framer-motion";

interface TaskProps {
  isDone: boolean;
}

export default function TaskLabel({ isDone }: TaskProps) {
  return (
    <div>
      <motion.label
        className={`${
          isDone
            ? "text-gray-600 dark:text-gray-400"
            : "text-black dark:text-white "
        } relative ml-3`}
      >
        Task Label
        <motion.span
          className={` ${
            isDone ? "bg-gray-600 dark:bg-gray-400" : "bg-black"
          } absolute left-0 w-full h-0.5 translate-y-1/2 top-1/2`}
          initial={{ width: 0 }}
          animate={{ width: isDone ? "100%" : 0 }}
          transition={{ duration: 0.1 }}
        ></motion.span>
      </motion.label>
    </div>
  );
}
