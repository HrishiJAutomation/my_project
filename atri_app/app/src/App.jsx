import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Cfpform from "./pages/Cfpform.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/aboutus" element={<Aboutus />} />
<Route path="/cfpform" element={<Cfpform />} />
    </Routes>
  );
}
