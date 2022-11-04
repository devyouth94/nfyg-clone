import Layout from "components/common/Layout";
import Header from "components/common/Header";
import Advertisement from "components/feature/advertisement/Advertisement";
import Info from "components/feature/info/Info";
import Introduce from "components/feature/introduce/Introduce";
import UpcomingList from "components/feature/upcomingList/UpcomingList";
import ProceedingList from "components/feature/proceedingList/ProceedingList";

const App = () => {
  return (
    <Layout>
      <Header />

      <Advertisement />

      <Info />

      <Introduce />

      <UpcomingList />

      <ProceedingList />
    </Layout>
  );
};

export default App;
