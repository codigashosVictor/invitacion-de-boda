import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Invitacion from "./Invitacion";
// App.js
export default function App() {
  return (
    <HashRouter basename="/invitacion-de-boda">
      <Routes>
        <Route path="/invitacion-de-boda/:family" element={<Invitacion />} />
      </Routes>
    </HashRouter>
  );
}
