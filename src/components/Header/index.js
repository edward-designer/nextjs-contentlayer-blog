import Link from "next/link";
import Logo from "./logo";
import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from "../icons";

const Header = () => {
  return (
    <header className="p-4 px-10 flex items-center justify-between z-50 relative">
      <Logo />
      <nav className="py-4 px-4 border border-solid border-dark rounded-full font-medium items-center flex gap-4 fixed top-6 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
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
