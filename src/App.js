import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invitacion from "./Invitacion";
// App.js
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invitacion-de-boda/:family" element={<Invitacion />} />
        {/* otras rutas si necesitas */}
      </Routes>
    </Router>
  );
}
