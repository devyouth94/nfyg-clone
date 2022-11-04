import React from "react";
import MeetupCardImage from "components/common/meetupCard/MeetupCardImage";
import MeetupCardInfo from "components/common/meetupCard/MeetupCardInfo";
import { MAIN_COLOR } from "styles/colorPalette";
import styled from "styled-components";

const MeetupCard = ({ item }) => {
  return (
    <S.MeetupCardContainer>
      <MeetupCardImage item={item} />
      <MeetupCardInfo item={item} />
    </S.MeetupCardContainer>
  );
};

const S = {
  MeetupCardContainer: styled.div`
    border: 1px solid ${MAIN_COLOR.gray1};
    border-radius: 1rem;

    cursor: pointer;

    .card-image {
      transition-duration: 0.3s;
    }

    &:hover {
      .card-image {
        transform: scale(1.1);
      }
    }
  `,
};

export default MeetupCard;
