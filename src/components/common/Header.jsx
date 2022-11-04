import React from "react";
import nav from "static/icon/icon_nav_menu.svg";
import logo from "static/icon/logo_small.svg";
import profile from "static/icon/img_profile_default.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <S.Header>
      <img src={nav} alt="nav" />
      <img src={logo} alt="logo" />
      <img src={profile} alt="profile" />
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    display: grid;
    grid-template-columns: 4rem auto 2.8rem;
    align-items: center;
    justify-content: space-between;

    height: 5.6rem;
    padding: 0 1.5rem;

    img {
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  `,
};

export default Header;
