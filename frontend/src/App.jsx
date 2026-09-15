import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Register from "./Register";
import AllEmployees from "./AllEmployees";
import Update from "./Update";
import Delete from "./Delete";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allemployees" element={<AllEmployees />} />
        {/* Backwards compatibility route */}
        <Route path="/allstudents" element={<Navigate to="/allemployees" replace />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
