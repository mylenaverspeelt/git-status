import React from "react";
import RepositoryItem from "../Repository-item/RepositoryItem";
import * as S from "./Repositories.styled";

export default function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>

      <S.WrapperTabPanel>
        <RepositoryItem name="blood-finder" linkToRepos="https://github.com/mylenaverspeelt/blood-finder" fullName="mylenaverspeelt/blood-finder"/>
      </S.WrapperTabPanel>

      <S.WrapperTabPanel>
        <RepositoryItem name="Chat-aluracord" linkToRepos="https://github.com/mylenaverspeelt/Chat-aluracord" fullName="mylenaverspeelt/Chat-aluracord" />
      </S.WrapperTabPanel>
      
    </S.WrapperTabs>
  );
}

