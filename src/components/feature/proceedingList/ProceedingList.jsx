import React, { useEffect, useState, useCallback } from "react";

import instance from "app/instance";
import MeetupCard from "components/common/meetupCard/MeetupCard";
import usePagination from "hooks/usePagination";
import { basicParams } from "utils/params";

import styled from "styled-components";

const ProceedingList = () => {
  const { offset, handleRefresh } = usePagination(20);
  const [proceedingList, setProceedingList] = useState([]);
  const [isNext, setIsNext] = useState(null);

  const handleGetList = useCallback(async () => {
    const { data } = await instance.get("/v2/nfyg/meetups", {
      params: { ...basicParams, upcoming: false, offset },
    });

    setProceedingList((prev) => [
      ...prev,
      ...data.data.meetups.filter((value) => !prev.some((item) => item.id === value.id)),
    ]);
    setIsNext(data.data.pagination.nextPage);
  }, [offset]);

  useEffect(() => {
    handleGetList();
  }, [handleGetList]);

  const handleGetMore = () => {
    handleRefresh();
  };

  return (
    <SListContainer>
      <h1>진행중인 정기 모임</h1>
      <p>
        이미 시작된 정기모임입니다.
        <br />
        시작된 모임의 2회차부터 놀러가기가 가능합니다!
      </p>

      <SCardContainer>
        {proceedingList?.map((item) => (
          <MeetupCard key={item.id} item={item} />
        ))}
      </SCardContainer>

      {isNext && <span onClick={handleGetMore}>더보기</span>}
    </SListContainer>
  );
};

const SListContainer = styled.div`
  padding: 3rem 2rem 2rem 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    margin-top: 2rem;

    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`;

const SCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  row-gap: 2.1rem;
  column-gap: 1.2rem;

  margin: 2rem 0 2rem 0;
`;

export default ProceedingList;
