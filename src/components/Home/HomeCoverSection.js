import { sortBlogs } from "@/src/utils";
import Image from "next/image";
const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const featuredBlog = sortedBlogs[0];
  return (
    <div className="w-full">
      <article className="flex flex-col justify-end mx-10 relative h-[85vh]">
        <Image
          alt={featuredBlog.title}
          src={featuredBlog.image.filePath.replace(/..\/public/i, "")}
          placeholder="blur"
          blurDataURL={featuredBlog.image.blurhashDataUrl}
          fill
          className="w-full h-full object-center object-cover rounded-3xl"
        />
      </article>
    </div>
  );
};

export default HomeCoverSection;
