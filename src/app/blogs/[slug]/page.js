import Image from "next/image";
import { slug } from "github-slugger";
import Tag from "@/src/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMDX from "@/src/components/Blog/RenderMDX";
import { siteMetaData } from "@/src/utils/siteMetaData";
import BlogTOC from "@/src/components/Blog/BlogTOC";
import Discussion from "@/src/components/Blog/Discussion";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) return;

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const updatedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  let imageList = [siteMetaData.socialBanner];
  if (blog?.image?.filePath === "string") {
    imageList = [
      `${siteMetaData.siteUrl}${blog.image.filePath.replace("../public", "")}`,
    ];
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetaData.siteUrl + img };
  });
  const authors = blog?.author ? [blog.author] : siteMetaData.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${siteMetaData.siteUrl}/blogs/${params.slug}`,
      siteName: siteMetaData.title,
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      images: ogImages,
      locale: siteMetaData.locale,
      type: "article",
      authors,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList = [siteMetaData.socialBanner];
  if (blog?.image?.filePath === "string") {
    imageList = [
      `${siteMetaData.siteUrl}${blog.image.filePath.replace("../public", "")}`,
    ];
  }
  const publishedAt = new Date(blog.publishedAt).toISOString();
  const updatedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: [
      {
        "@type": "Person",
        name: "Edward Chung",
        url: "https://edward-designer.github.io/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="relative md:mb-8 text-center w-full p-4 md:h-[70vh] bg-dark flex">
          <div className="absolute inset-0 h-full bg-dark/60 z-0">
            <Image
              alt={blog.title}
              src={blog.image.filePath.replace(/..\/public/i, "")}
              placeholder="blur"
              blurDataURL={blog.image.blurhashDataUrl}
              fill
              className="w-full h-full object-cover object-center"
              sizes="100vw"
              priority
            />
            <div
              aria-hidden={true}
              className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90"
            />
          </div>
          <div className="w-full z-10 flex flex-col items-start md:items-center md:justify-center relative">
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-6 text-sm py-2"
            />
            <h1 className="leading-tight mb-6 text-left mt-2 md:mt-6 font-semibold capitalize text-light text-3xl md:text-5xl w-5/6">
              {blog.title}
            </h1>
          </div>
        </div>
        <BlogDetails blog={blog} blogSlug={slug(params.slug)} />
        <div className="md:grid md:grid-cols-12 gap-16 mt-8 px-10">
          <div className="md:col-span-4">
            <BlogTOC toc={blog.toc} />
          </div>
          <div className="md:col-span-8 font-in prose dark:prose-invert prose-blockquote:rounded-r-lg prose-blockquote:bg-accent/20 prose-blockquote:px-8 prose-blockquote:py-4 prose-blockquote:border-accent max-w-full">
            <RenderMDX blog={blog} />
            <Discussion />
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPage;
