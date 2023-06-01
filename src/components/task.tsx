import { useState } from "react";
import CheckBox from "./checkBox";
import TaskLabel from "./taskLabel";

export default function Task() {
  const [isDone, setIsDone] = useState<boolean>(false);
  return (
    <span className="flex items-center px-4 py-4">
      <span onClick={() => setIsDone(!isDone)}>
        <CheckBox isDone={isDone} />
      </span>
      <TaskLabel isDone={isDone} />
    </span>
  );
}
