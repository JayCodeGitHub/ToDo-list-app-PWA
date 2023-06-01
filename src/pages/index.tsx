import Task from "@/components/task";
import DarkModeToggle from "@/components/darkModeToggle";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    localStorage.setItem("darkMode", !darkMode ? "dark" : "light");

    document.body.classList.toggle("dark");
  };
  return (
    <main className="w-screen h-screen bg-red-500 dark:bg-gray-900">
      <h1>Happy Notes</h1>
      <Task />
      <DarkModeToggle isSelected={darkMode} onChange={toggleDarkMode}>
        Dark Mode
      </DarkModeToggle>
    </main>
  );
}
