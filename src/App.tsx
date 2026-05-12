import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Acomodacoes } from "./pages/Acomodacoes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acomodacoes" element={<Acomodacoes />} />
    </Routes>
  );
}