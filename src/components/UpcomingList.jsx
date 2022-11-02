import React, { useEffect, useState } from "react";

import instance from "apis/instance";

import MeetupCard from "components/MeetupCard";
import Imoji from "components/Card/Imoji";

import { categoryArr } from "utils/arr";

import styled from "styled-components";

const UpcomingList = () => {
  const [upcomingList, setUpcomingList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleGetList = async () => {
    const { data } = await instance.get(
      "/meetups?type=1&season=7&order=salon_category_asc&upcoming=true&limit=20&offset=0",
    );
    setUpcomingList((prev) => [...prev, ...data.data.meetups]);
  };

  useEffect(() => {
    handleGetList();
  }, []);

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

  return (
    <SUpcomingListContainer>
      <SCategoryContainer>
        {categoryArr.map((category) => (
          <SCategoryBox
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            include={selectedCategory.includes(category.name)}
            color={category.color}
          >
            <Imoji category={category.name} include={selectedCategory.includes(category.name)} />
            {category.name}
          </SCategoryBox>
        ))}
      </SCategoryContainer>

      <SCardContainer>
        {upcomingList?.map((item) => (
          <MeetupCard key={item.id} item={item} />
        ))}
      </SCardContainer>
    </SUpcomingListContainer>
  );
};

const SUpcomingListContainer = styled.div``;

const SCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  row-gap: 2.1rem;
  column-gap: 1.2rem;

  padding: 2rem;
`;

const SCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  padding: 2rem;
`;

const SCategoryBox = styled.div`
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
`;

export default UpcomingList;
