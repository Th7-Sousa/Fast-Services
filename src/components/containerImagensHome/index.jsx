import React from "react";
import { Style } from "./styles";

import img_faxina from "../../images/img_faxina.svg";
import img_reforma from "../../images/img_reforma.svg";
import img_encanador from "../../images/img_encanador.svg";
import img_jardinagem from "../../images/img_jardinagem.svg";

const ImagesContainer = () => {
  return (
    <Style>
        <div>
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
        </div>
    </Style>
  );
};

export default ImagesContainer;