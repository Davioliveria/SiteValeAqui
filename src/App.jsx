// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
