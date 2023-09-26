"use client";

import Link from "next/link";
import BlogLayout3 from "../Blog/BlogLayout3";
import { AnimatePresence } from "framer-motion";

const RecentPosts = ({ blogs, title = "Recent Posts" }) => {
  return (
    <section className="w-full mt-16 px-8 flex flex-col items-center justify-center">
      <div className="flex w-full flex-row justify-between items-center">
        <h2 className="font-bold capitalize text-4xl">{title}</h2>
        {title === "Recent Posts" && (
          <Link
            href="/categories/all"
            className="block font-medium text-accent underline underline-offset-2 text-lg"
          >
            view all
          </Link>
        )}
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-8 mt-8 ">
        <AnimatePresence mode="wait">
          {blogs.map((blog) => (
            <BlogLayout3 key={blog.title} blog={blog} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RecentPosts;
