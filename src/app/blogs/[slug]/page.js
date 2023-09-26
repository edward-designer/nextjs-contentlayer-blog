import Image from "next/image";
import { slug } from "github-slugger";
import Tag from "@/src/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMDX from "@/src/components/Blog/RenderMDX";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  return (
    <article>
      <div className="relative mb-8 text-center w-full h-[70vh] bg-dark flex">
        <div className="absolute inset-0 h-full bg-dark/60 z-0">
          <Image
            alt={blog.title}
            src={blog.image.filePath.replace(/..\/public/i, "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            fill
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden={true}
            className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90"
          />
        </div>
        <div className="w-full z-10 flex flex-col items-center justify-center relative">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-sm py-2"
          />
          <h1 className="mt-6 font-semibold capitalize text-light text-5xl w-5/6 leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>
      <BlogDetails blog={blog} slug={slug(params.slug)} />
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details className="text-sm bg-dark/5 text-dark rounded-lg p-4 sticky top-6 max-h-[88vh] overflow-hidden overflow-y-auto">
            <summary className="text-lg font-semibold cursor-pointer">
              Table of Contents
            </summary>
            <ul className="mt-4 font-in">
              {blog.toc.map((heading) => (
                <li
                  key={heading.slug}
                  className={`${
                    heading.level === 3
                      ? "ml-3"
                      : "ml-1 border-t border-solid border-accent/10 font-semibold mt-4"
                  } py-1`}
                >
                  <a href={`#${heading.slug}`} className="hover:text-accent">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="col-span-8 font-in prose prose-blockquote:rounded-r-lg prose-blockquote:bg-accent/20 prose-blockquote:px-8 prose-blockquote:py-4 prose-blockquote:border-accent max-w-full">
          <RenderMDX blog={blog} />
        </div>
      </div>
    </article>
  );
};

export default BlogPage;
