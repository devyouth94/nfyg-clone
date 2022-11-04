import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isSoldOut } from "app/slices/selectSlice";
import { __getList, __getListMore } from "app/slices/upcomingListSlice";

import MeetupCard from "components/common/meetupCard/MeetupCard";
import Dropdown from "components/feature/upcomingList/Dropdown";
import Category from "components/feature/upcomingList/Category";

import usePagination from "hooks/usePagination";
import { getString } from "utils/getString";
import { dayArr, regionArr, categoryArr } from "utils/arr";

import checked from "static/icon/ic_check_on.svg";
import unchecked from "static/icon/ic_check_sm_off.svg";
import styled from "styled-components";

const UpcomingList = () => {
  const dispatch = useDispatch();
  const { offset, handleRefresh, handleReset } = usePagination(20, 2);
  const { data: upcomingList, isNext } = useSelector((state) => state.upcomingList);
  const {
    category: categoryData,
    day: dayData,
    region: regionData,
    soldOut,
  } = useSelector((state) => state.select);

  useEffect(() => {
    handleReset();
    dispatch(
      __getList({
        salonCategory: getString(categoryData),
        dayOfWeek: getString(dayData),
        region: getString(regionData),
        soldOut,
      }),
    );
  }, [handleReset, dispatch, categoryData, dayData, regionData, soldOut]);

  const handleClickSoldOut = () => {
    dispatch(isSoldOut(soldOut));
  };

  const handleGetMore = () => {
    handleRefresh();
    dispatch(
      __getListMore({
        salonCategory: getString(categoryData),
        dayOfWeek: getString(dayData),
        region: getString(regionData),
        soldOut,
        offset: offset,
      }),
    );
  };

  return (
    <S.UpcomingListContainer>
      <S.CategoryContainer>
        {categoryArr.map((category) => (
          <Category key={category.name} category={category} selectedData={categoryData} />
        ))}
      </S.CategoryContainer>

      <S.SoldOutContainer>
        <img
          src={soldOut === false ? checked : unchecked}
          alt="check"
          onClick={handleClickSoldOut}
        />
        <span onClick={handleClickSoldOut}>마감 모임 제외</span>
      </S.SoldOutContainer>

      <S.DropdownContainer>
        <Dropdown name="지역" arr={regionArr} selectedData={regionData} />
        <Dropdown name="요일" arr={dayArr} selectedData={dayData} />
      </S.DropdownContainer>

      <S.CardContainer>
        {upcomingList?.map((item) => (
          <MeetupCard key={item.id} item={item} />
        ))}
      </S.CardContainer>

      {isNext && <span onClick={handleGetMore}>더 보기</span>}
    </S.UpcomingListContainer>
  );
};

const S = {
  UpcomingListContainer: styled.div`
    padding-top: 2rem;
  `,

  CategoryContainer: styled.div`
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
  `,

  SoldOutContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 0 2rem;

    font-size: 1.2rem;

    img,
    span {
      cursor: pointer;
    }
  `,

  DropdownContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem 2rem;
  `,

  CardContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    row-gap: 2.1rem;
    column-gap: 1.2rem;

    padding: 2rem;
  `,
};

export default UpcomingList;
