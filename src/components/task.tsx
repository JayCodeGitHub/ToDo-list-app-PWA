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
      className="flex items-center justify-between w-full h-8 pl-4 my-4"
      drag="x"
      onDragEnd={() => removeTask(title)}
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
