import React, { useEffect, useState, useCallback } from "react";

import instance from "apis/instance";

import MeetupCard from "components/MeetupCard";
import Dropdown from "components/Dropdown";
import Imoji from "components/Card/Imoji";

import useCategory from "hooks/useCategory";
import { categoryArr } from "utils/arr";

import checked from "static/icon/ic_check_on.svg";
import unchecked from "static/icon/ic_check_sm_off.svg";

import styled from "styled-components";
import { dayArr, regionArr } from "utils/arr";

const UpcomingList = () => {
  const { queryCategory, selectedCategory, handleCategoryClick } = useCategory();
  const [upcomingList, setUpcomingList] = useState([]);

  const [params, setParams] = useState({
    type: 1,
    season: 7,
    order: "salon_category_asc",
    upcoming: true,
    limit: 20,
    offset: 0,
    salonCategory: null,
    soldOut: null,
    weekOfDay: null,
    region: null,
  });

  const handleGetList = useCallback(async () => {
    const { data } = await instance.get("/meetups", {
      params: { ...params, salonCategory: queryCategory },
    });
    setUpcomingList(data.data.meetups);
  }, [params, queryCategory]);

  useEffect(() => {
    handleGetList();
  }, [handleGetList]);

  const handleClickSoldOut = () => {
    if (params.soldOut === null) {
      setParams((prev) => ({ ...prev, soldOut: false }));
    } else {
      setParams((prev) => ({ ...prev, soldOut: null }));
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

      <SSoldoutChecked>
        <img
          src={params.soldOut === false ? checked : unchecked}
          alt="check"
          onClick={handleClickSoldOut}
        />
        <span onClick={handleClickSoldOut}>마감 모임 제외</span>
      </SSoldoutChecked>

      <SDropdownContainer>
        <Dropdown name="지역" arr={regionArr} />
        <Dropdown name="요일" arr={dayArr} />
      </SDropdownContainer>

      <SCardContainer>
        {upcomingList?.map((item) => (
          <MeetupCard key={item.id} item={item} />
        ))}
      </SCardContainer>
    </SUpcomingListContainer>
  );
};

const SUpcomingListContainer = styled.div`
  padding-top: 2rem;
`;

const SCategoryContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: nowrap;
  overflow-x: scroll;

  padding: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    flex-shrink: 0;
  }
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

const SSoldoutChecked = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 2rem;

  font-size: 1.2rem;
`;

const SDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 2rem;
`;

const SCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  row-gap: 2.1rem;
  column-gap: 1.2rem;

  padding: 2rem;
`;

export default UpcomingList;
