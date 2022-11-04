import React from "react";
import TextBackground from "components/common/meetupCard/TextBackground";
import { categoryArr } from "utils/arr";
import { isPast } from "utils/date";
import { WithIcon } from "static/icon/WithIcon";
import { MAIN_COLOR } from "styles/colorPalette";
import styled, { css } from "styled-components";

const MeetupCardImage = ({ item }) => {
  const [category] = categoryArr.filter((value) => value.name === item.tags.salonCategory[0]);
  const isFull = item.attendeeCount === item.maxCapacity;
  const isWith = item.additionalInformation.memberLed;

  return (
    <S.ImageContainer
      color={category.lightColor}
      isFull={isFull}
      isPast={isPast(item.sessions[0].date)}
    >
      {isWith && (
        <>
          <S.ThumbnailImage color={category.color}>
            <img src={item.thumbnailUrl} alt="thumbnailImage" />
          </S.ThumbnailImage>

          <TextBackground category={category.name} />
        </>
      )}

      {!isWith && (
        <>
          <S.WithIcon>
            <WithIcon color={category.color} />
          </S.WithIcon>

          <S.ProfileImage color={category.color}>
            <img src={item.host.profileImageUrl} alt="hostImage" />
          </S.ProfileImage>

          <S.NameTag color={category.color}>
            <span>{item.host.name}</span>
            <span>|</span>
            <span>{item.host.title}</span>
          </S.NameTag>
        </>
      )}
    </S.ImageContainer>
  );
};

const S = {
  ImageContainer: styled.div`
    position: relative;

    width: 100%;
    height: 13rem;
    background-color: ${(props) => props.color};

    border-radius: 1rem 1rem 0 0;

    ${(props) =>
      (props.isFull || props.isPast) &&
      css`
        filter: brightness(65%);
      `}
  `,

  ThumbnailImage: styled.div`
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
  `,

  ProfileImage: styled.div`
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
  `,

  WithIcon: styled.div`
    position: absolute;
    top: 4.5rem;
    left: 1rem;

    z-index: 9;
  `,

  NameTag: styled.div`
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 2.5rem;
    padding: 0.5rem 0;
    background-color: ${(props) => props.color};

    font-size: 1.1rem;
    color: ${MAIN_COLOR.white};

    > span:nth-child(1) {
      font-weight: 700;
      text-align: center;
    }

    > span:nth-child(2) {
      margin: 0 0.4rem;
    }

    > span:nth-child(3) {
      max-width: 9rem;
      line-height: 1.3rem;
    }
  `,
};

export default MeetupCardImage;
