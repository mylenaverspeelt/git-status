import React from "react";
import * as S from "./Header.styled";

function Header() {
  return (
    <header>
      <S.Wrapper>
        <input type="text" placeholder="username"/>
        <button type="submmit">Buscar</button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
