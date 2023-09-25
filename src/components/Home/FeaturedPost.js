import React from "react";
import BlogLayout1 from "../Blog/BlogLayout1";
import BlogLayout2 from "../Blog/BlogLayout2";

const FeaturedPost = ({ blogs }) => {
  return (
    <section className="w-full mt-32 px-8 flex flex-col items-center justify-center">
      <h2 className="w-full font-bold capitalize text-4xl">Featured Posts</h2>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-6 mt-8 ">
        <article className="col-span-1 row-span-2">
          <BlogLayout1 blog={blogs[1]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayout2 blog={blogs[2]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayout2 blog={blogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPost;
