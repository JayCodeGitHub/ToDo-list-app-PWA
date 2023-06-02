import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import { NavigationItems } from "@/assets/navigationItems";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full h-12 text-gray-900 transition-all px-28 dark:text-white bg-slate-100 dark:bg-gray-900">
      <ul className="flex gap-4 text-lg">
        {NavigationItems.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <DarkModeToggle>Dark Mode</DarkModeToggle>
    </nav>
  );
}
