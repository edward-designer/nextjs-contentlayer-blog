import Link from "next/link";
import { format, parseISO } from "date-fns";

const BlogDetails = ({ blog, slug }) => {
  return (
    <div
      className="px-10 bg-accent text-light flex items-center
      justify-around flex-wrap text-base font-medium mx-10 rounded-lg gap-4 p-4"
    >
      <div>
        <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
      </div>
      <span>10 views</span>
      <div>{blog.readingTime.text}</div>
      <Link href={`/categories/${blog.tags[0]}`}>#{blog.tags[0]}</Link>
    </div>
  );
};

export default BlogDetails;
