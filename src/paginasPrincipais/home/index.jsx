import React from "react";
import { HomeStyles } from "./styles";
import relogio from "../../images/relogio.svg";
import seloQualidade from "../../images/seloQualidade.svg";
import ImagesContainer from "../../components/containerImagensHome/index";

const Home = () => {
  return (
    <div>
      <HomeStyles>
        <div className="quadroPrincipal">
          <body>
            <section className="secao-contrate">
              <img src={relogio} alt={"Ícone Relógio"} />
              <div className="textos-secao1">
                <h2 id="texto-grande">CONTRATE AGORA MESMO !</h2>
                <h4 id="texto-menor">Serviços gerais rápidos e de qualidade</h4>
              </div>
              <img src={seloQualidade} alt={"Ícone selo de qualidade"} />
            </section>

            <ImagesContainer />
          </body>
        </div>
      </HomeStyles>
    </div>
  );
};

export default Home;
