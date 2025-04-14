import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ValeAqui. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
