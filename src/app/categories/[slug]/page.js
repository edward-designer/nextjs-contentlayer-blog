import Categories from "@/src/components/Blog/Categories";
import RecentPosts from "@/src/components/Home/RecentPosts";
import { allBlogs } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";
import { siteMetaData } from "@/src/utils/siteMetaData";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params, searchParams }, parent) {
  const allCategories = [
    "all",
    ...new Set([...allBlogs.map((blog) => blog.tags).flat(Infinity)]),
  ];
  const category = allCategories.find((cat) => slug(cat) === params.slug);
  const title = `Blog Category: ${category
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase())}`;
  const description = `Learn more about ${category} through our collection of expert articles`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteMetaData.siteUrl}/categories/${params.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = [
    "all",
    ...new Set([...allBlogs.map((blog) => blog.tags).flat(Infinity)]),
  ];
  const category = allCategories.find((cat) => slug(cat) === params.slug);
  const blogs = allBlogs.filter(
    (blog) =>
      blog.tags.map((tag) => slug(tag)).includes(params.slug) ||
      params.slug === "all"
  );
  return (
    <div>
      <Categories
        categories={allCategories}
        active={category}
        className="sticky top-0 z-10 backdrop-blur-md"
      />
      <RecentPosts blogs={blogs} title={`#${category}`} viewAll={false} />
    </div>
  );
};

export default CategoryPage;
