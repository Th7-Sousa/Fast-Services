import React from "react";
import { HomeStyles } from "./styles";

import logo from "./images/logo.svg";

import relogio from "./images/relogio.svg";
import seloQualidade from "./images/seloQualidade.svg";

import img_faxina from "./images/img_faxina.svg";
import img_reforma from "./images/img_reforma.svg";
import img_encanador from "./images/img_encanador.svg";
import img_jardinagem from "./images/img_jardinagem.svg";

const Home = () => {
  return (
    <div>
      <HomeStyles>
        <div className="quadroPrincipal">
          <header>
            <div className="section-logo">
              <img
                className="logo"
                src={logo}
                alt={"Imagem do logotipo Fast Services"}
              />
              <h1>Fast Services</h1>
            </div>

            <nav className="menu">
              <a href="./" className="nav-link">
                Home
              </a>
              <a href="./Sobre" className="nav-link">
                Sobre Nós
              </a>
              <a href="./TrabalheConosco" className="nav-link">
                Trabalhe Conosco
              </a>
              <a href="./Servico" className="nav-link">
                Serviços
              </a>
              <a href="./Contato" className="nav-link">
                Contato
              </a>
              <a href="./" className="nav-link-login">
                Login
              </a>
            </nav>
          </header>

          <body>
            <section className="secao-contrate">
              <img src={relogio} alt={"Ícone Relógio"} />
              <div className="textos-secao1">
                <h2 id="texto-grande">CONTRATE AGORA MESMO !</h2>
                <h4 id="texto-menor">Serviços gerais rápidos e de qualidade</h4>
              </div>
              <img src={seloQualidade} alt={"Ícone selo de qualidade"} />
            </section>

            <section className="secao-imagens">
              <div id="container-img">
                <img
                  id="imgServico"
                  src={img_faxina}
                  alt={"imagem de icone faxina"}
                />
                <button id="button-img">Faxina</button>
              </div>

              <div id="container-img">
                <img
                  id="imgServico"
                  src={img_reforma}
                  alt={"imagem de icone reforma"}
                />
                <button id="button-img">Reforma e Construção</button>
              </div>

              <div id="container-img">
                <img
                  id="imgServico"
                  src={img_encanador}
                  alt={"imagem de icone encanador"}
                />
                <button id="button-img">Encanador</button>
              </div>

              <div id="container-img">
                <img
                  id="imgServico"
                  src={img_jardinagem}
                  alt={"imagem de icone jardinagem"}
                />
                <button id="button-img">Jardinagem</button>
              </div>
            </section>
          </body>
        </div>
      </HomeStyles>
    </div>
  );
};

export default Home;
