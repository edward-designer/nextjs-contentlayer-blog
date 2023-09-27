import React from "react";
import BlogLayout1 from "../Blog/BlogLayout1";
import BlogLayout2 from "../Blog/BlogLayout2";

const FeaturedPost = ({ blogs }) => {
  return (
    <section className="w-full my-8 md:my-16 px-4 md:px-8 flex flex-col items-center justify-center rounded-2xl">
      <h2 className="w-full font-bold capitalize text-2xl md:text-4xl">
        Featured Posts
      </h2>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 gap-6 mt-8 ">
        <article className="hidden md:block col-span-1 row-span-2">
          <BlogLayout1 blog={blogs[1]} />
        </article>
        <article className="md:hidden col-span-1 row-span-2">
          <BlogLayout2 blog={blogs[1]} />
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
