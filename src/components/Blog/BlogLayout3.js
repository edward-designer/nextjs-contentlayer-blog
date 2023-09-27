import Image from "next/image";
import Link from "next/link";

import { format } from "date-fns";
import { motion } from "framer-motion";

const BlogLayout3 = ({ blog }) => {
  return (
    <motion.div
      className="group flex flex-col h-full items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2, type: "tween" }}
      layoutId={blog.title}
    >
      <Link
        href={blog.url}
        className="aspect-[8/3] md:aspect-[4/3] w-full rounded-lg overflow-hidden relative"
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
      <div className="flex flex-col w-full">
        <span className="uppercase text-accent font-semibold text-xs md:text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h1 className="font-semibold capitalize text-base md:text-md text-balance">
            <span className="bg-gradient-to-r from-white/50 to-accent/100 bg-[length:0px_1px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="capitalize text-dark/50 dark:text-light/50 font-semibold text-xs md:text-sm">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </motion.div>
  );
};

export default BlogLayout3;
