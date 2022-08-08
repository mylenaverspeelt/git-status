import React from "react";
import * as S from "./Layout.styled";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
}

export default Layout;
