import React from "react";
import { useDispatch } from "react-redux";
import { getSelect, delSelect, resetSelect } from "app/slices/selectSlice";
import Imoji from "components/common/Imoji";
import { MAIN_COLOR } from "styles/colorPalette";
import styled from "styled-components";

const Category = ({ category, selectedData }) => {
  const dispatch = useDispatch();

  const handleCategoryClick = (item) => {
    if (item === "전체" && !selectedData.length) return;

    if (item === "전체") {
      dispatch(resetSelect({ name: "카테고리" }));
      return;
    }

    if (selectedData.includes(item)) {
      dispatch(delSelect({ name: "카테고리", item }));
    } else {
      dispatch(getSelect({ name: "카테고리", item }));
    }
  };

  return (
    <S.CategoryCard
      onClick={() => handleCategoryClick(category.name)}
      include={
        selectedData.includes(category.name) || (category.name === "전체" && !selectedData.length)
      }
      color={category.color}
    >
      <Imoji
        category={category.name}
        include={
          selectedData.includes(category.name) || (category.name === "전체" && !selectedData.length)
        }
      />
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
    background-color: ${(props) => (props.include ? props.color : MAIN_COLOR.white)};

    border: 1px solid #dadce0;
    border-radius: 1rem;

    font-size: 1.2rem;
    color: ${(props) => (props.include ? MAIN_COLOR.white : MAIN_COLOR.black)};

    cursor: pointer;
  `,
};

export default Category;
