import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import Gamepage from "./page/Gamepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Gamepage" element={<Gamepage />} />
      </Routes>
    </Router>
  );
};

export default App;
