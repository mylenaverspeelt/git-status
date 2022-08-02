import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile/Profile";
import Repositories from "./components/Repositories/Repositories";
import { ResetCSS } from "./global/ResetCSS";

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
