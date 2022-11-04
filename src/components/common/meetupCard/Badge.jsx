import React from "react";
import { MAIN_COLOR } from "styles/colorPalette";
import styled from "styled-components";

const Badge = ({ item, color }) => {
  const isFull = item.attendeeCount === item.maxCapacity;
  const isFullSoon = item.attendeeCount > item.maxCapacity / 2;
  const isClose = new Date() - new Date(item.sessions[0].date) > 0;
  const isOpenPlan = new Date() - new Date(item.openingDate) < 0;

  if (isFull || isClose) {
    return (
      <S.badgeContainer>
        <S.badge color={MAIN_COLOR.black}>모집 마감</S.badge>
        <S.badge color={color}>{isClose ? "앵콜 가능" : "대기 가능"}</S.badge>
      </S.badgeContainer>
    );
  }

  if (isFullSoon) {
    return (
      <S.badgeContainer>
        <S.badge color={MAIN_COLOR.red}>마감 임박</S.badge>
      </S.badgeContainer>
    );
  }

  if (isOpenPlan) {
    return (
      <S.badgeContainer>
        <S.badge color={MAIN_COLOR.black}>오픈 예정</S.badge>
      </S.badgeContainer>
    );
  }
};

const S = {
  badgeContainer: styled.div`
    position: absolute;
    top: 0.7rem;
    left: 0.7rem;

    display: flex;
    gap: 0.7rem;

    z-index: 99;
  `,

  badge: styled.div`
    padding: 0.6rem;
    background-color: ${(props) => props.color};
    border-radius: 0.4rem;

    font-size: 1rem;
    color: ${MAIN_COLOR.white};
  `,
};

export default Badge;
