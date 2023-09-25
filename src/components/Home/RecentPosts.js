import Link from "next/link";
import BlogLayout3 from "../Blog/BlogLayout3";

const RecentPosts = ({ blogs }) => {
  return (
    <section className="w-full mt-32 px-8 flex flex-col items-center justify-center">
      <div className="flex w-full flex-row justify-between items-center">
        <h2 className="font-bold capitalize text-4xl">Recent Posts</h2>
        <Link
          href="/categories/all"
          className="block font-medium text-accent underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-8 mt-8 ">
        {blogs.map((blog) => (
          <article className="col-span-1 row-span-1" key={blog.id}>
            <BlogLayout3 blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
