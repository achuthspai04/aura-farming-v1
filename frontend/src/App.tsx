import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard"; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}