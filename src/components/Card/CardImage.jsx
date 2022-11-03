import React from "react";
import { WithIcon } from "static/icon/WithIcon";
import styled, { css } from "styled-components";
import { categoryArr } from "utils/arr";
import TextBackground from "./TextBackground";

const CardImage = ({ item }) => {
  const [category] = categoryArr.filter((value) => value.name === item.tags.salonCategory[0]);

  return (
    <>
      <SBackground color={category.lightColor} isFull={item.attendeeCount === item.maxCapacity}>
        {item.additionalInformation.memberLed && (
          <>
            <SThumbnailImage color={category.color}>
              <img src={item.thumbnailUrl} alt="thumbnailImage" />
            </SThumbnailImage>
            <TextBackground category={category.name} />
          </>
        )}

        {!item.additionalInformation.memberLed && (
          <>
            <SWithIcon>
              <WithIcon color={category.color} />
            </SWithIcon>
            <SProfileImage color={category.color}>
              <img src={item.host.profileImageUrl} alt="hostImage" />
            </SProfileImage>
            <SNameTag color={category.color}>
              <span>{item.host.name}</span>
              <span>|</span>
              <span>{item.host.title}</span>
            </SNameTag>
          </>
        )}
      </SBackground>
    </>
  );
};

const SBackground = styled.div`
  position: relative;

  width: 100%;
  height: 13rem;
  background-color: ${(props) => props.color};

  border-radius: 1rem 1rem 0 0;

  ${(props) =>
    props.isFull &&
    css`
      filter: brightness(65%);
    `}
`;

const SThumbnailImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 8rem;
  height: 8rem;

  z-index: 9;

  img {
    width: 100%;
    border: 1px solid ${(props) => props.color};
  }
`;

const SWithIcon = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 1rem;

  z-index: 9;
`;

const SProfileImage = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  width: 8rem;
  height: 8rem;

  img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid ${(props) => props.color};
  }
`;

const SNameTag = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.5rem;
  background-color: ${(props) => props.color};

  font-size: 1.1rem;
  color: #fff;

  > span:nth-child(1) {
    font-weight: 700;
    text-align: center;
  }

  > span:nth-child(2) {
    margin: 0 0.4rem;
  }

  > span:nth-child(3) {
    max-width: 10rem;
  }
`;

export default CardImage;
