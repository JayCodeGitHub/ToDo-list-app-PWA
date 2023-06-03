import { FormEvent, useState } from "react";
import { useTasks } from "@/hooks/useTasks";

export default function Input() {
  const { tasks, addTask } = useTasks();
  const [term, setTerm] = useState("");
  const [error, setError] = useState<boolean | string>(false);

  const validate = (task: string) => {
    let valid = true;
    tasks.map(function (item) {
      if (item === task) {
        setError("The task already exists");
        valid = false;
      }
    });
    if (valid) return null;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (term.length < 1) {
      setError("Type a task");
    } else if (validate(term) === null) {
      addTask(term);
      setError(false);
    }
    setTerm("");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full px-14 md:w-auto">
      {error ? <p className="text-red-500 transition-all">{error}</p> : null}
      <input
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className="rounded-md p-0.5 border-2 border-gray-900 w-full md:w-60"
      />
    </form>
  );
}
