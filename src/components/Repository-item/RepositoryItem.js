import React from "react";
import * as S from "./RepositoryItem.styled"
export default function RepositoryItem({ name, linkToRepos, fullName }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <h4>link:  <a href={linkToRepos} target="_blank" rel="noreferrer">
        {fullName}
        </a></h4>
     
    </S.Wrapper>
  );
}
