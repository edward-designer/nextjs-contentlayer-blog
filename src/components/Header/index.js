"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./logo";
import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from "../icons";

import { motion } from "framer-motion";

const pages = ["home", "about", "contact"];

const Header = () => {
  const path = usePathname();
  return (
    <header className="p-4 px-10 flex items-center justify-between z-50 relative">
      <Logo />
      <nav className="py-3 px-4 font-medium items-center flex gap-4 top-6 bg-light/60 backdrop-blur-sm">
        {pages.map((page) => {
          const route = page === "home" ? "" : page;
          return (
            <Link key={page} href={`/${route}`} className="relative">
              {page.toUpperCase()}
              {path === `/${route}` && (
                <motion.span
                  layoutId="underline"
                  className="block w-full h-[1px] absolute bg-accent"
                />
              )}
            </Link>
          );
        })}
        <button>
          <SunIcon />
        </button>
      </nav>
      <div className="flex flex-column gap-4 items-center">
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
            className="inline-block w-6 h-6 hover:scale-125 transition-all duration-200"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
