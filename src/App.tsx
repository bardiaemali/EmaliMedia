import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./EmaliLanding";
import Impressum from "./impressum";
import Datenschutz from "./Datenschutz";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}
