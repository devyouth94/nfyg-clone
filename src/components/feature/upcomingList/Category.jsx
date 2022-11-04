import React, { useState } from "react";
import { useQueryContext } from "contexts/QueryContext";
import Imoji from "components/common/Imoji";
import styled from "styled-components";

const Category = ({ category }) => {
  const { handleGetQuery, handleDelQuery } = useQueryContext();
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleCategoryClick = (category) => {
    if (category === "전체" && !selectedCategory.length) return;

    if (category === "전체") {
      setSelectedCategory([]);
      return;
    }

    if (selectedCategory.includes(category)) {
      handleDelQuery("카테고리", category);
      setSelectedCategory((prev) => prev.filter((item) => item !== category));
    } else {
      handleGetQuery("카테고리", category);
      setSelectedCategory((prev) => [...prev, category]);
    }
  };

  return (
    <S.CategoryCard
      key={category.name}
      onClick={() => handleCategoryClick(category.name)}
      include={selectedCategory.includes(category.name)}
      color={category.color}
    >
      <Imoji category={category.name} include={selectedCategory.includes(category.name)} />
      {category.name}
    </S.CategoryCard>
  );
};

const S = {
  CategoryCard: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    width: fit-content;
    height: 4rem;
    padding: 1rem;
    background-color: ${(props) => (props.include ? props.color : "#fff")};

    border: 1px solid #dadce0;
    border-radius: 1rem;

    font-size: 1.2rem;
    color: ${(props) => (props.include ? "#fff" : "#000")};
  `,
};

export default Category;
