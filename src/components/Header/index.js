"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";

import Logo from "./logo";
import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../icons";

import { motion } from "framer-motion";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";

const pages = ["home", "blogs", "about", "contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, switchTheme] = useThemeSwitch();
  const path = usePathname();
  return (
    <>
      <header className="p-2 px-4 md:p-4 md:px-10 flex items-center justify-between z-50 relative ">
        <Logo />
        <div className="sm:hidden overflow-hidden z-20">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <nav
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-300 bg-light/70 dark:bg-dark/70 backdrop-blur sm:hidden flex flex-col fixed top-0 left-0 p-20 justify-center gap-10 w-full items-center`}
        >
          {pages.map((page) => {
            const route = page === "home" ? "" : page;
            const regExp = new RegExp(
              page === "home"
                ? "/$"
                : page === "blogs"
                ? `/(blogs|categories)`
                : `/${route}`,
              "g"
            );
            return (
              <Link
                key={page}
                href={`/${route}`}
                className="relative text-2xl"
                onClick={() => setIsOpen(false)}
              >
                {page.toUpperCase()}
                {path.match(regExp) && (
                  <motion.span
                    layoutId="underline"
                    className="block w-full h-[1px] absolute bg-accent"
                  />
                )}
              </Link>
            );
          })}
          <button onClick={switchTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
        <nav className="hidden sm:flex py-3 px-4 font-medium items-center gap-4 top-6 backdrop-blur-sm">
          {pages.map((page) => {
            const route = page === "home" ? "" : page;
            const regExp = new RegExp(
              page === "home"
                ? "/$"
                : page === "blogs"
                ? `/(blogs|categories)`
                : `/${route}`,
              "g"
            );
            return (
              <Link key={page} href={`/${route}`} className="relative">
                {page.toUpperCase()}
                {path.match(regExp) && (
                  <motion.span
                    layoutId="underline"
                    className="block w-full h-[1px] absolute bg-accent"
                  />
                )}
              </Link>
            );
          })}
          <button onClick={switchTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
        <div className="hidden sm:flex flex-column gap-4 items-center">
          <a href="https://">
            <LinkedinIcon
              alt="LinkedIn"
              className="inline-block w-6 h-6 hover:scale-125 transition-all duration-200"
            />
          </a>
          <a href="https://">
            <TwitterIcon
              alt="X"
              className="inline-block w-6 h-6 hover:scale-125 transition-all duration-200"
            />
          </a>
          <a href="https://">
            <GithubIcon
              alt="Github"
              className="dark:fill-light inline-block w-6 h-6 hover:scale-125 transition-all duration-200"
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
