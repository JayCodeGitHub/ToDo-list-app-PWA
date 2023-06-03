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
        onClick={() => setIsHamburger(true)}
      >
        <span className="w-full h-0.5 dark:bg-white bg-gray-900 rounded-sm" />
        <span className="w-full h-0.5 dark:bg-white bg-gray-900 rounded-sm" />
        <span className="w-full h-0.5 dark:bg-white bg-gray-900 rounded-sm" />
      </span>
      <div
        onClick={() => setIsHamburger(false)}
        className={`fixed top-0 left-0 w-full h-full z-20 transition-all ${
          isHamburger
            ? " bg-background-visible visible"
            : " bg-background-invisible invisible "
        }`}
      />
      <div
        className={`fixed top-0 right-0 z-30 w-4/6 h-screen  dark:bg-gray-900 bg-slate-100 transition-all flex flex-col justify-between items-center py-16 ${
          isHamburger ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-24">
          <div className="w-40 h-40 bg-[#3b82f6] rounded-full " />
          <ul className="flex flex-col w-40 gap-10 text-lg text-white">
            {NavigationItems.map(({ name, href }) => (
              <li key={name} className="w-40">
                <Link
                  onClick={() => setIsHamburger(false)}
                  href={href}
                  className={`flex items-center justify-center w-40 py-2 text-gray-900 transition-all rounded-lg dark:text-white
                    ${router.pathname == href ? "bg-[#3b82f6]" : ""}
                  `}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <span>
          <DarkModeToggle>Dark Mode</DarkModeToggle>
        </span>
      </div>
    </nav>
  );
}
