import Image from "next/image";
import Link from "next/link";

import Tag from "../Elements/Tag";
import { format } from "date-fns";

const BlogLayout2 = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 grid-rows-1 h-full gap-4 items-center text-dark">
      <Link
        href={blog.url}
        className="aspect-square col-span-4 h-full rounded-xl overflow-hidden relative"
      >
        <Image
          alt={blog.title}
          src={blog.image.filePath.replace(/..\/public/i, "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
        />
      </Link>
      <div className="col-span-8">
        <span className="uppercase text-accent font-semibold text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h1 className="font-semibold capitalize text-lg text-balance">
            <span className="bg-gradient-to-r from-white/50 to-accent/100 bg-[length:0px_1px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayout2;
