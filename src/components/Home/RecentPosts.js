"use client";

import Link from "next/link";
import BlogLayout3 from "../Blog/BlogLayout3";
import { AnimatePresence } from "framer-motion";

const RecentPosts = ({ blogs, title = "Recent Posts", viewAll = true }) => {
  return (
    <section className="w-full mt-8 md:mt-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="flex w-full flex-row justify-between items-center">
        <h2 className="font-bold capitalize text-2xl md:text-4xl">{title}</h2>
        {viewAll && (
          <Link
            href="/categories/all"
            className="block font-medium text-accent underline underline-offset-2 text-lg"
          >
            view all
          </Link>
        )}
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8 mt-8 ">
        <AnimatePresence>
          {blogs.map((blog) => (
            <BlogLayout3 key={blog.title} blog={blog} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RecentPosts;
