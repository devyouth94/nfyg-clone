import React from "react";

import nav from "static/icon/icon_nav_menu.svg";
import logo from "static/icon/logo_small.svg";
import profile from "static/icon/img_profile_default.svg";

import styled from "styled-components";

const Header = () => {
  return (
    <SHeader>
      <img src={nav} alt="nav" />
      <img src={logo} alt="logo" />
      <img src={profile} alt="profile" />
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.6rem;
  padding: 0 1.5rem;

  img {
    cursor: pointer;
  }

  > img:nth-child(1) {
    width: 4rem;
  }

  > img:nth-child(3) {
    width: 2.8rem;
  }
`;

export default Header;
