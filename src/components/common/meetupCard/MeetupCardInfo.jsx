import React from "react";
import Imoji from "components/common/Imoji";
import { convertDate } from "utils/date";
import { MAIN_COLOR } from "styles/colorPalette";
import styled from "styled-components";

const MeetupCardInfo = ({ item }) => {
  const [category] = item.tags.salonCategory;

  return (
    <S.InfoContainer>
      <div>
        <Imoji category={category} />
        {category}
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
    grid-template-rows: 2rem auto 1.2rem;
    row-gap: 0.5rem;

    min-height: 13rem;
    padding: 1.5rem;

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      font-size: 1.1rem;
      color: ${MAIN_COLOR.gray3};
    }

    > div:nth-child(2) {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.6rem;
    }

    > div:nth-child(3) {
      font-size: 1.1rem;
      line-height: 1.2rem;
      color: ${MAIN_COLOR.gray3};
    }
  `,
};

export default MeetupCardInfo;
