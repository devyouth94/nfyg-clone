import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};

const S = {
  Layout: styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: 375px;
  `,
};

export default Layout;
