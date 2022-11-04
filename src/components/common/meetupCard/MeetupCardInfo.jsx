import React from "react";
import Imoji from "components/common/Imoji";
import { convertDate } from "utils/date";
import styled from "styled-components";

const MeetupCardInfo = ({ item }) => {
  const [category] = item.tags.salonCategory;

  return (
    <S.InfoContainer>
      <div>
        <span>
          <Imoji category={category} />
        </span>
        <span>{category}</span>
      </div>
      <div>{item.title}</div>
      <div>
        {convertDate(item.sessions[0].date)} · {item.briefLocation}
      </div>
    </S.InfoContainer>
  );
};

const S = {
  InfoContainer: styled.div`
    display: grid;
    grid-template-rows: 2.5rem auto 1.6rem;

    min-height: 13rem;
    padding: 1.5rem;

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      font-size: 1.1rem;
      line-height: 1.6rem;
      color: #666;
    }

    > div:nth-child(2) {
      margin-bottom: 0.5rem;

      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.8rem;
    }

    > div:nth-child(3) {
      font-size: 1.1rem;
      line-height: 1.6rem;
      color: #666;
    }
  `,
};

export default MeetupCardInfo;
