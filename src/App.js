import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Invitacion from "./Invitacion";
// App.js
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:family" element={<Invitacion />} />
      </Routes>
    </Router>
  );
}
