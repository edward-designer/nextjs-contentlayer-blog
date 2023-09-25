import Image from "next/image";
import Link from "next/link";

import Tag from "../Elements/Tag";

const BlogLayout1 = ({ blog }) => {
  return (
    <div className="group h-full overflow-hidden rounded-xl flex flex-column relative items-end">
      <div
        aria-hidden={true}
        className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-2xl z-0"
      />
      <Image
        alt={blog.title}
        src={blog.image.filePath.replace(/..\/public/i, "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        fill
        className="object-center object-cover rounded-2xl -z-10 group-hover:scale-105 transition-all duration-500"
      />
      <div className="w-full p-8 flex flex-col items-start justify-center text-light z-0 relative">
        <Tag name={blog.tags[0]} link={`/categories/${blog.tags[0]}`} />
        <Link href={blog.url} className="mt-2">
          <h1 className="font-bold capitalize text-2xl text-balance">
            <span className="bg-gradient-to-r from-white/50 to-accent/100 bg-[length:0px_1px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayout1;
