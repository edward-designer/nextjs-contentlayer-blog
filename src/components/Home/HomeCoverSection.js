import Image from "next/image";
import Link from "next/link";
import { slug } from "github-slugger";
import Tag from "../Elements/Tag";

const HomeCoverSection = ({ blog }) => {
  return (
    <div className="w-full my-8 md:my-16">
      <article className="flex flex-col justify-end mx-4 md:mx-8 relative h-[40vh] md:h-[65vh]">
        <div
          aria-hidden={true}
          className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0"
        />
        <div className="w-full md:w-3/4 p-4 md:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag name={blog.tags[0]} link={`/categories/${slug(blog.tags[0])}`} />
          <Link href={blog.url} className="mt-2 md:mt-6">
            <h1 className="font-bold capitalize text-2xl md:text-4xl text-balance">
              <span className="bg-gradient-to-r from-white/50 to-accent/100 bg-[length:0px_1px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-2 md:mt-4 text-sm md:text-base font-in">
            {blog.description}
          </p>
        </div>
        <Image
          alt={blog.title}
          src={blog.image.filePath.replace(/..\/public/i, "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className="object-center object-cover rounded-3xl -z-10"
          sizes="100vw"
          priority
        />
      </article>
    </div>
  );
};

export default HomeCoverSection;
