import { slug } from "github-slugger";
import Category from "./Category";

const Categories = ({ categories, active, className, ...props }) => {
  return (
    <div
      className={`mt-8 bg-dark/10 p-4 flex gap-3 items-center justify-center flex-wrap ${className}`}
      {...props}
    >
      {categories.map((category) => (
        <Category
          key={category}
          link={`/categories/${slug(category)}`}
          name={category}
          isActive={category === active}
        />
      ))}
    </div>
  );
};

export default Categories;
