import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPost from "../components/Home/FeaturedPost";
import { sortBlogs } from "../utils";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  const sortedBlogs = sortBlogs(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center relative z-0">
      <HomeCoverSection blog={sortedBlogs[0]} />
      <FeaturedPost blogs={sortedBlogs} />
      <RecentPosts blogs={sortedBlogs.slice(4, 10)} />
    </main>
  );
}
