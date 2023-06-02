import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";

export default function NavBar() {
  return (
    <nav className="absolute z-10 flex items-center justify-between w-full h-12 text-gray-900 transition-all px-28 dark:text-white">
      <ul className="flex gap-4 text-lg">
        <li>
          <Link href="/">To Do</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <DarkModeToggle>Dark Mode</DarkModeToggle>
    </nav>
  );
}
