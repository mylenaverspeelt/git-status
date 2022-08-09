import React from "react";
import * as S from "./Layout.styled";
import Header from "../Header/Header";
import useGithub from "../../hooks/Github-hooks";

function Layout({ children }) {

  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
}

export default Layout;
