import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Bem-vindo ao ValeAqui</h1>
        <p>Um app pensado para facilitar o uso do seu Vale Alimentação e Refeição!</p>
      </section>

      <section className="cards-container">
        <div className="card">
          <h2>📍 Mapeamento Inteligente</h2>
          <p>
            Descubra facilmente os estabelecimentos que aceitam Vale Alimentação e Refeição próximos de você, direto no mapa.
          </p>
        </div>

        <div className="card">
          <h2>🛒 Praticidade no dia a dia</h2>
          <p>
            Esqueça a dúvida na hora de sair pra comer ou fazer compras. Veja onde seu vale é aceito sem dor de cabeça.
          </p>
        </div>

        <div className="card">
          <h2>🔍 Busca por Preferência</h2>
          <p>
            Filtre estabelecimentos por tipo: restaurantes, mercados, padarias e muito mais.
          </p>
        </div>
      </section>

      <a href="#contato" className="btn-cta">Entre em contato</a>
    </div>
  );
};

export default Home;
