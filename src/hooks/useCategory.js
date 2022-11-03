import { useState } from "react";

const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleCategoryClick = (category) => {
    if (category === "전체" && !selectedCategory.length) return;

    if (category === "전체") {
      setSelectedCategory([]);
      return;
    }

    if (selectedCategory.includes(category)) {
      setSelectedCategory((prev) => prev.filter((item) => item !== category));
    } else {
      setSelectedCategory((prev) => [...prev, category]);
    }
  };

  return { queryCategory: selectedCategory.join(","), selectedCategory, handleCategoryClick };
};

export default useCategory;
