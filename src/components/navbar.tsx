import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import { useRouter } from "next/router";
import { NavigationItems } from "@/assets/navigationItems";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const router = useRouter();
  return (
    <nav className="flex items-center justify-end w-full px-6 py-6 text-gray-900 transition-all md:justify-between md:px-28 dark:text-white bg-slate-100 dark:bg-gray-900">
      <ul className="hidden gap-4 text-lg md:flex">
        {NavigationItems.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={
                router.pathname == href
                  ? " px-5 py-2.5 rounded-full transition-all cursor-pointer hover:text-gray-400 relative"
                  : " px-5 py-2.5 rounded-full transition-all cursor-pointer hover:text-gray-400 relative"
              }
            >
              {router.pathname == href && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-[#3b82f6]"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-20 text-gray-900 dark:text-white">
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <span className="hidden md:flex">
        <DarkModeToggle>Dark Mode</DarkModeToggle>
      </span>

      <span
        className="flex flex-col justify-between w-6 h-5 md:hidden"
        onClick={() => setIsHamburger(!isHamburger)}
      >
        <span className="w-full h-0.5 dark:bg-white bg-gray-900 rounded-sm" />
        <span className="w-full h-0.5 dark:bg-white bg-gray-900 rounded-sm" />
        <span className="w-full h-0.5 dark:bg-white bg-gray-900 rounded-sm" />
      </span>
      <span
        onClick={() => setIsHamburger(false)}
        className={`fixed top-0 right-0 z-10 w-4/6 h-screen translate-x-full bg-slate-900 transition-all ${
          isHamburger ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-white">
          {NavigationItems.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </span>
    </nav>
  );
}
