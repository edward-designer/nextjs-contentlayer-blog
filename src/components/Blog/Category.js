import Link from "next/link";

import { cx } from "@/src/utils";

const Category = ({ link = "#", name, className, isActive, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "text-sm inline-block py-2 px-8 rounded-full font-semibold border border-solid border-dark/30 hover:scale-105 transistion-all ease duration-200",
        className,
        isActive ? "bg-dark text-light" : "bg-light text-dark"
      )}
      {...props}
    >
      {`#${name}`}
    </Link>
  );
};

export default Category;
