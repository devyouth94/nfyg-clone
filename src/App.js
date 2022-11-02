import Header from "components/Header";
import Advertisement from "components/Advertisement";
import Info from "components/Info";
import Introduce from "components/Introduce";
import UpcomingList from "components/UpcomingList";
import ProceedingList from "components/ProceedingList";

import styled from "styled-components";

const App = () => {
  return (
    <SLayout>
      <Header />

      <Advertisement />

      <Info />

      <Introduce />

      <UpcomingList />

      <ProceedingList />
    </SLayout>
  );
};

const SLayout = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 375px;
`;

export default App;
