import React from "react";
import { MAIN_COLOR } from "styles/colorPalette";
import styled from "styled-components";

const HelpText = ({ onClick, isLoading }) => {
  return (
    <S.HelpText>{isLoading ? <S.Loader /> : <span onClick={onClick}>더 보기</span>}</S.HelpText>
  );
};

const S = {
  HelpText: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 3rem;

    span {
      font-size: 1.4rem;
      transition-duration: 0.3s;

      cursor: pointer;

      &:hover {
        font-weight: 700;
      }
    }
  `,

  Loader: styled.div`
    border: 0.5rem solid ${MAIN_COLOR.gray1};
    border-top: 0.5rem solid ${MAIN_COLOR.black};
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};

export default HelpText;
