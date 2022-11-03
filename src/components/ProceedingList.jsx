import React, { useEffect, useState } from "react";

import instance from "apis/instance";
import MeetupCard from "components/MeetupCard";

import styled from "styled-components";
import { useCallback } from "react";

const ProceedingList = () => {
  const [proceedingList, setProceedingList] = useState([]);

  const [params, setParams] = useState({
    type: 1,
    season: 7,
    order: "salon_category_asc",
    upcoming: false,
    limit: 20,
    offset: 0,
  });

  const handleGetList = useCallback(async () => {
    const { data } = await instance.get("/meetups", { params });
    setProceedingList((prev) => [...prev, ...data.data.meetups]);
  }, [params]);

  useEffect(() => {
    handleGetList();
  }, [handleGetList]);

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
    </SListContainer>
  );
};

const SListContainer = styled.div`
  padding: 2rem;

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

  margin-top: 2rem;
`;

export default ProceedingList;
