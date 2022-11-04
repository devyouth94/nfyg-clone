import React, { useEffect, useState, useCallback } from "react";

import instance from "apis/instance";

import MeetupCard from "components/common/meetupCard/MeetupCard";
import Dropdown from "components/feature/upcomingList/Dropdown";
import Category from "components/feature/upcomingList/Category";

import checked from "static/icon/ic_check_on.svg";
import unchecked from "static/icon/ic_check_sm_off.svg";

import styled from "styled-components";
import { dayArr, regionArr, categoryArr } from "utils/arr";
import { useQueryContext } from "contexts/QueryContext";

const UpcomingList = () => {
  const { query } = useQueryContext();
  const [upcomingList, setUpcomingList] = useState([]);
  const [isNext, setIsNext] = useState(null);

  const [params, setParams] = useState({
    type: 1,
    season: 7,
    order: "salon_category_asc",
    upcoming: true,
    limit: 20,
    offset: 0,
    soldOut: null,
  });

  const handleGetMore = async () => {
    const { data } = await instance.get("/meetups", {
      params: {
        ...params,
        salonCategory: query.category,
        dayOfWeek: query.day,
        region: query.region,
        offset: params.offset + params.limit,
      },
    });
    setUpcomingList((prev) => [...prev, ...data.data.meetups]);
    setParams((prev) => ({ ...prev, offset: params.offset + params.limit }));
    setIsNext(data.data.pagination.nextPage);
  };

  const handleGetList = useCallback(async () => {
    const { data } = await instance.get("/meetups", {
      params: {
        ...params,
        salonCategory: query.category,
        dayOfWeek: query.day,
        region: query.region,
      },
    });
    setUpcomingList(data.data.meetups);
    setIsNext(data.data.pagination.nextPage);
  }, [params.soldOut, query.category, query.day, query.region]);

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
          <Category key={category.name} category={category} />
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

        {isNext && <span onClick={handleGetMore}>더 보기</span>}
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
