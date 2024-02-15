import { useContext, useState } from "react";
import NewsContext from "../context";

const Category = () => {
  const { setCategory } = useContext(NewsContext);
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    setActiveCategory(selectedCategory);
  };

  return (
    <div className="container mx-auto mt-6 cursor-pointer">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li
          className={activeCategory === "business" ? "text-green-500" : ""}
          onClick={() => handleCategoryClick("business")}
        >
          Business
        </li>
        <li
          className={activeCategory === "sports" ? "text-green-500" : ""}
          onClick={() => handleCategoryClick("sports")}
        >
          Sports
        </li>
        <li
          className={activeCategory === "health" ? "text-green-500" : ""}
          onClick={() => handleCategoryClick("health")}
        >
          Health
        </li>
        <li
          className={activeCategory === "entertainment" ? "text-green-500" : ""}
          onClick={() => handleCategoryClick("entertainment")}
        >
          Entertainment
        </li>
        <li
          className={activeCategory === "technology" ? "text-green-500" : ""}
          onClick={() => handleCategoryClick("technology")}
        >
          Technology
        </li>
      </ul>
    </div>
  );
};

export default Category;
