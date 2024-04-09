import "./App.css";
import Signup from "./pages/signup.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile.jsx";
import Confirmation from "./components/confirmation.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/conf" element={<Confirmation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;