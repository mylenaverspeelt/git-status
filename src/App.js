import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile/Profile";
import Repositories from "./components/Repositories/Repositories";
import { ResetCSS } from "./global/ResetCSS";
import GithubProvider from "./providers/github-provider";

function App() {
  return (
    <main>
    <GithubProvider>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
