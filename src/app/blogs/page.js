import { allBlogs } from "contentlayer/generated";
import { sortBlogs } from "../../utils";
import RecentPosts from "../../components/Home/RecentPosts";
import { siteMetaData } from "@/src/utils/siteMetaData";

const title = "All blog posts";
const description = "A complete list of all the blog posts I have written";
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${siteMetaData.siteUrl}/blogs`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const Blogs = () => {
  const sortedBlogs = sortBlogs(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center relative z-0">
      <RecentPosts blogs={sortedBlogs} title="All Blog Posts" viewAll={false} />
    </main>
  );
};

export default Blogs;
