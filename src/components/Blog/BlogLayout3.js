import Image from "next/image";
import Link from "next/link";

import Tag from "../Elements/Tag";
import { format } from "date-fns";

const BlogLayout3 = ({ blog }) => {
  return (
    <div className="group flex flex-col h-full items-center text-dark gap-3">
      <Link
        href={blog.url}
        className="aspect-[4/3] w-full rounded-lg overflow-hidden relative"
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
      <div className="">
        <span className="uppercase text-accent font-semibold text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h1 className="font-semibold capitalize text-md text-balance">
            <span className="bg-gradient-to-r from-white/50 to-accent/100 bg-[length:0px_1px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-sm">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayout3;
