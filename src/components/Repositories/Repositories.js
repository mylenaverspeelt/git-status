import React, { useEffect, useState } from "react";
import RepositoryItem from "../Repository-item/RepositoryItem";
import * as S from "./Repositories.styled";
import useGithub from "../../hooks/Github-hooks";

export default function Repositories() {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    sethasUserForSearchRepos(!!githubState.repositories);
  }, [
    githubState.user.login,
    getUserRepos,
    getUserStarred,
    githubState.repositories,
  ]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepos={item.linkToRepos}
                  fullName={item.fullName}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepos={item.linkToRepos}
                  fullName={item.fullName}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <> </>
      )}
    </>
  );
}
