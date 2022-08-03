import React, { createContext, useState } from "react";

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = () => {

const [githubState, setGithubState] = useState(initialstate)

  return <></>;
};

export default GithubProvider;
