import React, { useEffect, useState, useCallback } from "react";
import instance from "app/instance";
import LoadMore from "components/common/LoadMore";
import MeetupCard from "components/common/meetupCard/MeetupCard";
import usePagination from "hooks/usePagination";
import { basicParams } from "utils/params";
import styled from "styled-components";

const ProceedingList = () => {
  const { offset, handleRefresh } = usePagination(20);

  const [proceedingList, setProceedingList] = useState([]);
  const [isNext, setIsNext] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetList = useCallback(async () => {
    const { data } = await instance.get("/v2/nfyg/meetups", {
      params: { ...basicParams, upcoming: false, offset },
    });

    setProceedingList((prev) => [
      ...prev,
      ...data.data.meetups.filter((value) => !prev.some((item) => item.id === value.id)),
    ]);
    setIsNext(data.data.pagination.nextPage);
    setIsLoading(false);
  }, [offset]);

  useEffect(() => {
    handleGetList();
  }, [handleGetList]);

  const handleGetMore = () => {
    handleRefresh();
    setIsLoading(true);
  };

  return (
    <S.ListContainer>
      <h1>진행중인 정기 모임</h1>
      <p>
        이미 시작된 정기모임입니다.
        <br />
        시작된 모임의 2회차부터 놀러가기가 가능합니다!
      </p>

      <S.CardContainer>
        {proceedingList?.map((item) => (
          <MeetupCard key={item.id} item={item} />
        ))}
      </S.CardContainer>

      {isNext && <LoadMore onClick={handleGetMore} isLoading={isLoading} />}
    </S.ListContainer>
  );
};

const S = {
  ListContainer: styled.div`
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
  `,

  CardContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    row-gap: 2.1rem;
    column-gap: 1.2rem;

    margin: 2rem 0;
  `,
};

export default ProceedingList;
