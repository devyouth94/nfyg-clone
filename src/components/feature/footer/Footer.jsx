import React from "react";
import { MAIN_COLOR } from "styles/colorPalette";
import styled from "styled-components";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Link>
        <span>FAQ</span>
        <span>모임장 모집</span>
        <span>공간 모집</span>
        <span>채용</span>
      </S.Link>

      <S.Company>넷플릭스 보는 날이면 연희동에 가야한다</S.Company>

      <S.Company>
        <span>주식회사 세븐픽쳐스 | 대표자 전희재 | 사업자등록번호 000-00-00000</span>
        <span>서울시 서대문구 연희로5길 54-24</span>
      </S.Company>
    </S.FooterContainer>
  );
};

const S = {
  FooterContainer: styled.footer`
    height: 17rem;
    margin: 0 2rem;

    border-top: 1px solid ${MAIN_COLOR.gray1};

    font-size: 1.3rem;
    line-height: 1.8rem;
  `,

  Link: styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    padding-top: 1.5rem;

    font-weight: 700;
    color: ${MAIN_COLOR.gray3};

    span {
      cursor: pointer;
    }
  `,

  Company: styled.div`
    padding-top: 2rem;

    color: ${MAIN_COLOR.gray2};
  `,
};

export default Footer;
