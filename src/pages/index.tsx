import { useState } from "react";
import Task from "@/components/task";
import DarkModeToggle from "@/components/darkModeToggle";
import Input from "@/components/input";

export default function Home() {
  const [tasks, setTasks] = useState([
    `Buy groceries for the week`,
    `Complete a 30-minute workout`,
    `Call and schedule a doctor's appointment`,
    `Reply to important emails`,
    `Organize and declutter the living room`,
    `Read a chapter of a book`,
    `Pay bills and update the budget`,
    `Start a new hobby or learn a new skill`,
    `Write a thank-you note to a friend or family member`,
    `Plan a weekend getaway or day trip`,
  ]);
  return (
    <main className="absolute w-screen h-screen transition-all bg-slate-100 dark:bg-gray-900">
      {tasks.map((item) => (
        <Task title={item} key={item} />
      ))}
      <DarkModeToggle>Dark Mode</DarkModeToggle>
      <Input />
    </main>
  );
}
