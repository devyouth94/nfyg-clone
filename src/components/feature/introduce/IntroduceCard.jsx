import React from "react";
import Imoji from "components/common/Imoji";
import { displayTime } from "utils/date";
import styled from "styled-components";

const IntroduceCard = ({ item }) => {
  return (
    <S.Card>
      <div>
        <span>
          <Imoji category={item.salonCategory[0]} />
          {item.salonCategory[0]}
        </span>
        <span>{displayTime(item.createdAt)}</span>
      </div>

      <div>{item.introduction}</div>
    </S.Card>
  );
};

const S = {
  Card: styled.div`
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

      span {
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
  `,
};

export default IntroduceCard;
