import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./landing_components/Navbar";
import Landing from "./landing";



function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}


export default App;
