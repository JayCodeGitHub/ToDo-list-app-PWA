import Task from "@/components/task";
import DarkModeToggle from "@/components/darkModeToggle";

export default function Home() {
  return (
    <main className="bg-red-500">
      <h1>Happy Notes</h1>
      <Task />
      <DarkModeToggle />
    </main>
  );
}
