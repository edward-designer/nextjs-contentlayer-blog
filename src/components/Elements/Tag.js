import Link from "next/link";

import { cx } from "@/src/utils";

const Tag = ({ link = "#", name, className, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "text-xs md:text-sm inline-block py-1 md:py-2 px-4 md:px-8 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transistion-all ease duration-200",
        className
      )}
      {...props}
    >
      {name}
    </Link>
  );
};

export default Tag;
