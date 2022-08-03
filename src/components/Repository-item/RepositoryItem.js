import React from "react";

export default function RepositoryItem({ name, linkToRepos, fullName }) {
  return (
    <>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepos} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </>
  );
}
