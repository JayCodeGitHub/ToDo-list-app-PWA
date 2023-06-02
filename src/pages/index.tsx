import Task from "@/components/task";
import DarkModeToggle from "@/components/darkModeToggle";
import Input from "@/components/input";
import { useTasks } from "@/hooks/useTasks";
import Link from "next/link";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <>
      <main className="absolute flex flex-col items-center justify-start w-screen h-screen gap-5 py-12 transition-all bg-slate-100 dark:bg-gray-900">
        <nav>
          <ul>
            <li>
              <Link href="/">To Do</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <DarkModeToggle>Dark Mode</DarkModeToggle>
        <Input />
        <section className="flex flex-col items-start w-48 mt-5">
          {tasks.map((item) => (
            <Task title={item} key={item} />
          ))}
        </section>
      </main>
    </>
  );
}
