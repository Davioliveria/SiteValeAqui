import React from 'react';
import './Integrantes.css';

const Integrantes = () => {
  const membros = [
    {
      nome: 'Anderson',
      funcao: 'Estudante de Tecnologia',
      instagram: 'https://instagram.com/__anderjr__',
    },
    {
      nome: 'Beatriz de Jesus',
      funcao: 'Estudante de Tecnologia',
      instagram: 'https://instagram.com/beatriz.ferreira19',
    },
    {
      nome: 'Davi Oliveira',
      funcao: 'Líder do Projeto e Estudante de Tecnologia',
      github: 'https://github.com/Davioliveria',
    },
    {
      nome: 'Davyd Oliveira',
      funcao: 'Estudante de Tecnologia',
      instagram: 'https://instagram.com/bateraa_davydd',

    },
    {
      nome: 'Evandro',
      funcao: 'Estudante de Tecnologia',
      instagram: 'https://instagram.com/evandrosampaio_',
      
    },
    {
      nome: 'Matheus Lima',
      funcao: 'Estudante de Tecnologia',
      instagram: 'https://www.instagram.com/limaftn/',
      github: 'https://github.com/limaftn1',
    },
    {
      nome: 'Wendell',
      funcao: 'Estudante de Tecnologia',
      instagram: 'https://instagram.com/wendell.n13',
      linkdIn: 'https://br.linkedin.com/in/wendell2007'
    },
  ];

  return (
    <div className="pagina-integrantes">
      <section className="comecin">
      <h1>Integrantes</h1>
      <p>Somos alunos da Etec Abdiaas do Nascimento, alunos do curso de Desenvolvimento de Sistemas. Esse é o nosso projeto do TCC.
        Segue as redes de cada um dos integrantes:
      </p>
      </section>
      <div className="integrantes-container">
        {membros.map((membro, index) => (
          <div className="integrante" key={index}>
            <h3>{membro.nome}</h3>
            <p>{membro.funcao}</p>
            <div className="RedesSociais">
      {membro.instagram && (
    <a
      href={membro.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-link"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          fill="#d80d8a"
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        />
      </svg>
    </a>
  )}
              {membro.linkdIn && (
                <a
                  href={membro.linkdIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#0077B5"
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-12.4-58.4-43.5-58.4-23.7 0-37.8 16-44 31.5-2.3 5.5-2.9 13.2-2.9 20.9V448H172V148.9h89.1v40.1h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                    />
                  </svg>
                </a>
              )}
              {membro.github && (
                <a
                  href={membro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      fill="#000"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.53 5.47 7.61.4.07.55-.17.55-.38 0-.19-.01-.69-.01-1.35-2.22.48-2.68-.69-2.68-.69-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.79.06 1.21.81 1.21.81.7 1.21 1.84.86 2.28.66.07-.5.27-.86.49-1.06-1.62-.18-3.32-.81-3.32-3.58 0-.79.28-1.43.74-1.94-.08-.18-.32-.94.07-1.95 0 0 .62-.2 2.04.74 1.18-.35 2.46-.36 3.65 0 1.41-.94 2.04-.74 2.04-.74-.39 1.02.16 1.77.08 1.95.46.51.73 1.15.73 1.94 0 2.77-1.7 3.4-3.33 3.58.27.23.51.68.51 1.37 0 .99-.01 1.79-.01 2.04 0 .21.15.45.55.38 3.18-1.08 5.47-4.08 5.47-7.61 0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;
