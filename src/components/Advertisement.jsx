import React from "react";

import banner from "static/img/coming_soon_banner.jpg";

import styled from "styled-components";

const Advertisement = () => {
  return (
    <SAnchor href="https://ibbxdzam.paperform.co/" target="_blank" rel="noreferrer">
      <img src={banner} alt="banner" />
    </SAnchor>
  );
};

const SAnchor = styled.a`
  display: flex;
  justify-content: center;

  overflow: hidden;

  img {
    height: 5.6rem;

    cursor: pointer;
  }
`;

export default Advertisement;
