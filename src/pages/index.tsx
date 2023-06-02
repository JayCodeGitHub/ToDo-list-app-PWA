import Task from "@/components/task";
import DarkModeToggle from "@/components/darkModeToggle";
import Input from "@/components/input";
import { useTasks } from "@/hooks/useTasks";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <main className="absolute w-screen h-screen transition-all bg-slate-100 dark:bg-gray-900">
      <Input />
      {tasks.map((item) => (
        <Task title={item} key={item} />
      ))}
      <DarkModeToggle>Dark Mode</DarkModeToggle>
    </main>
  );
}
