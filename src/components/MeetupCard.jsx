import React from "react";
import styled from "styled-components";
import { convertDate } from "utils/date";
import CardImage from "./Card/CardImage";
import Imoji from "./Card/Imoji";

const MeetupCard = ({ item }) => {
  return (
    <SCard>
      <CardImage
        category={item.tags.salonCategory[0]}
        isWith={item.additionalInformation.memberLed}
        host={item.host}
        thumbnail={item.thumbnailUrl}
      />
      <SInfo>
        <div>
          <span>
            <Imoji category={item.tags.salonCategory[0]} />
          </span>
          <span>{item.tags.salonCategory[0]}</span>
        </div>
        <div>{item.title}</div>
        <div>
          {convertDate(item.sessions[0].date)} · {item.briefLocation}
        </div>
      </SInfo>
    </SCard>
  );
};

const SCard = styled.div`
  flex: 1 1 40%;

  border: 1px solid #dadce0;
  border-radius: 1rem;
`;

const SInfo = styled.div`
  display: grid;
  grid-template-rows: 2.5rem auto 1.6rem;

  min-height: 14rem;
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
`;

export default MeetupCard;
