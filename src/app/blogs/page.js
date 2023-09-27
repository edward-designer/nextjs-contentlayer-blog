import { allBlogs } from "contentlayer/generated";
import { sortBlogs } from "../../utils";
import RecentPosts from "../../components/Home/RecentPosts";

const Blogs = () => {
  const sortedBlogs = sortBlogs(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center relative z-0">
      <RecentPosts blogs={sortedBlogs} title="All Blog Posts" viewAll={false} />
    </main>
  );
};

export default Blogs;
