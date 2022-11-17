import { useState, useEffect } from "react";
import instance from "app/instance";
import IntroduceCard from "components/feature/introduce/IntroduceCard";

import usePagination from "hooks/usePagination";
import { IIntroduce } from "utils/types";

import shuffle from "static/icon/shuffle_gray.svg";
import styled from "styled-components";
import axios from "axios";

const Introduce = () => {
  const { limit, offset, handleRefresh } = usePagination(4, 1, 9);
  const [introduce, setIntroduce] = useState<IIntroduce[]>([]);

  const handleGetIntroduce = async () => {
    try {
      const { data } = await instance.get("/v2/nfyg/introductions");
      setIntroduce((prev) => [...prev, ...data.data.introductions]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  };

  useEffect(() => {
    handleGetIntroduce();
  }, []);

  return (
    <S.IntroduceContainer>
      <S.Title>
        <h2>참여 중인 멤버들의 한 줄 소개</h2>
        <img onClick={handleRefresh} src={shuffle} alt="shuffle" />
      </S.Title>

      <S.CardContainer>
        {introduce.slice(offset, offset + limit).map((item, idx) => (
          <IntroduceCard key={idx} item={item} />
        ))}
      </S.CardContainer>
    </S.IntroduceContainer>
  );
};

const S = {
  IntroduceContainer: styled.div`
    padding: 3rem 2rem 0 2rem;
  `,

  Title: styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 2.4rem;
      font-weight: 700;
    }

    img {
      width: 1.8rem;
      cursor: pointer;
    }
  `,

  CardContainer: styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
    overflow-x: scroll;

    margin-top: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      flex-shrink: 0;
    }
  `,
};

export default Introduce;
