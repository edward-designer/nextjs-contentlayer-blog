"use client";

import { usePageWidth } from "../Hooks/usePageWidth";

const BlogTOC = ({ toc }) => {
  const pageWidth = usePageWidth();
  return (
    <details
      open={pageWidth >= 768}
      className="mb-6 text-sm bg-dark/5 dark:bg-light/5 rounded-lg p-4 sticky top-6 md:max-h-[88vh] overflow-hidden overflow-y-auto"
    >
      <summary className="text-lg font-semibold cursor-pointer">
        Table of Contents
      </summary>
      <ul className="mt-4 font-in">
        {toc.map((heading) => (
          <li
            key={heading.slug}
            className={`${
              heading.level === 3
                ? "ml-3"
                : "ml-1 border-t border-solid border-accent/10 font-semibold mt-4"
            } py-1`}
          >
            <a href={`#${heading.slug}`} className="hover:text-accent">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default BlogTOC;
