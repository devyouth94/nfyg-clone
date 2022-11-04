import React from "react";
import MeetupCardImage from "components/common/meetupCard/MeetupCardImage";
import MeetupCardInfo from "components/common/meetupCard/MeetupCardInfo";
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
    border: 1px solid #dadce0;
    border-radius: 1rem;
  `,
};

export default MeetupCard;
