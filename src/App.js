import Salons from "pages/Salons";

const { Routes, Route } = require("react-router-dom");

const App = () => {
  return (
    <Routes>
      <Route index element={<Salons />} />
    </Routes>
  );
};

export default App;
