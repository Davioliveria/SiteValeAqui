import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">ValeAqui</div>

      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/formulario" onClick={() => setMenuOpen(false)}>Formulário</Link>
        <Link to="/integrantes" onClick={() => setMenuOpen(false)}>Integrantes</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
      </nav>
    </header>
  );
}
