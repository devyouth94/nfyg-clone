import React, { useState, useEffect } from "react";

import instance from "apis/instance";

import Imoji from "components/Card/Imoji";

import usePagination from "hooks/usePagination";
import { displayTime } from "utils/date";
import shuffle from "static/icon/shuffle_gray.svg";

import styled from "styled-components";

const Introduce = () => {
  const [introduce, setIntroduce] = useState([]);
  const { limit, offset, handleRefresh } = usePagination(4, 9);

  const handleGetIntroduce = async () => {
    const { data } = await instance.get("/introductions");
    setIntroduce((prev) => [...prev, ...data.data.introductions]);
  };

  useEffect(() => {
    handleGetIntroduce();
  }, []);

  return (
    <SIntroduceContainer>
      <div>
        <h2>참여 중인 멤버들의 한 줄 소개</h2>
        <img onClick={handleRefresh} src={shuffle} alt="shuffle" />
      </div>
      <div>
        {introduce.slice(offset, offset + limit).map((item, idx) => (
          <SIntroduceItem key={idx}>
            <div>
              <div>
                <Imoji category={item.salonCategory[0]} />
                {item.salonCategory[0]}
              </div>
              <div>{displayTime(item.createdAt)}</div>
            </div>
            <div>{item.introduction}</div>
          </SIntroduceItem>
        ))}
      </div>
    </SIntroduceContainer>
  );
};

const SIntroduceContainer = styled.div`
  padding: 3rem 2rem 0 2rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 2.4rem;
      font-weight: 700;
    }

    img {
      width: 1.8rem;
    }
  }

  > div:nth-child(2) {
    margin-top: 1rem;
  }
`;

const SIntroduceItem = styled.div`
  width: 24rem;
  height: 14rem;
  padding: 1.5rem;

  border: 1px solid #dadce0;
  border-radius: 1rem;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.1rem;
    color: #666;

    div {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  > div:nth-child(2) {
    margin-top: 1rem;

    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.6rem;
  }
`;
export default Introduce;
