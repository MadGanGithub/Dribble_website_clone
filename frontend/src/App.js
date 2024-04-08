import "./App.css";
import Signup from "./pages/signup.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile.jsx";
import Second from "./components/second_page.jsx";
import Confirmation from "./components/confirmation.jsx";
import First from "./components/first_page.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Second />} />
          <Route path="/conf" element={<Confirmation />} />
          <Route path="/sec" element={<First />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;