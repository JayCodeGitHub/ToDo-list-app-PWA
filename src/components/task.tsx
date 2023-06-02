import { useState } from "react";
import CheckBox from "./checkBox";
import TaskLabel from "./taskLabel";
import { motion } from "framer-motion";
import { useTasks } from "@/hooks/useTasks";

interface TaskProps {
  title: string;
}

export default function Task({ title }: TaskProps) {
  const [isDone, setIsDone] = useState<boolean>(false);
  const { removeTask } = useTasks();
  return (
    <motion.span
      className="flex items-center justify-between h-8 pl-4 my-4 w-min"
      layout
      drag="x"
      onDragEnd={() => removeTask(title)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <motion.span className="flex items-center">
        <span onClick={() => setIsDone(!isDone)}>
          <CheckBox isDone={isDone} />
        </span>
        <TaskLabel isDone={isDone}>{title}</TaskLabel>
      </motion.span>
    </motion.span>
  );
}
