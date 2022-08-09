import React, { useState } from "react";
import * as S from "./Header.styled";
import useGithub from "../../hooks/Github-hooks";

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input type="text" placeholder="username" onChange={(e) => setUsernameForSearch(e.target.value)} />
        <button type="submmit" onClick={submitGetUser}>Buscar</button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
