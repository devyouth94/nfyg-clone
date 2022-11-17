import Salons from "pages/Salons";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route index element={<Salons />} />
    </Routes>
  );
};

export default App;
