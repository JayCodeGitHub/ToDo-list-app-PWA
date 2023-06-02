import { FormEvent, useState } from "react";
import { useTasks } from "@/hooks/useTasks";

export default function Input() {
  const { addTask } = useTasks();
  const [term, setTerm] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(term);
    setTerm("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setTerm(e.target.value)} value={term} />
    </form>
  );
}