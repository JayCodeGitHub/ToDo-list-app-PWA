import { useState } from "react";
import CheckBox from "./checkBox";
import TaskLabel from "./taskLabel";

export default function Task() {
  const [isDone, setIsDone] = useState<boolean>(false);
  return (
    <span
      onClick={() => setIsDone(!isDone)}
      className="flex items-center px-4 py-4"
    >
      <CheckBox isDone={isDone} />
      <TaskLabel isDone={isDone} />
    </span>
  );
}
