import Layout from "./components/Layout/Layout";
import NoSearch from "./components/No-search/No-search";
import Profile from "./components/Profile/Profile";
import Repositories from "./components/Repositories/Repositories";
import useGithub from "./hooks/Github-hooks";

function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
<>
{githubState.loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Profile />
          <Repositories />
        </>
      )}
</>) : (
<NoSearch />
)}      
    </Layout>
  );
}

export default App;
