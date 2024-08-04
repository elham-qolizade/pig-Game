import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import Gamepage from "./page/Gamepage";
import { AppContextProvider } from "./context/appcontext.tsx";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Gamepage" element={<Gamepage />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
