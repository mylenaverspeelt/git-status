import React from "react";
import GithubProvider from "./providers/github-provider";
import { ResetCSS } from "./global/ResetCSS";
import App from "./App";

export default function Provider() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App/>
      </GithubProvider>
    </main>
  );
}
