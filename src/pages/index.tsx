import Task from "@/components/task";
import DarkModeToggle from "@/components/darkModeToggle";

export default function Home() {
  return (
    <main className="w-screen h-screen transition-all bg-slate-100 dark:bg-gray-900">
      <h1>Happy Notes</h1>
      <Task />
      <DarkModeToggle>Dark Mode</DarkModeToggle>
    </main>
  );
}
