import React from "react";
import {HomeStyles}  from "./styles";
import relogio from "./icones/relogio.svg";
import seloQualidade from "./icones/seloQualidade.svg";

import img_faxina from "./icones/img_faxina.svg";
import img_reforma from "./icones/img_reforma.svg";
import img_encanador from "./icones/img_encanador.svg";
import img_jardinagem from "./icones/img_jardinagem.svg";


const Home = () => {
    return (

        <div>
            <HomeStyles>
                <div className="quadroPrincipal">
                    <header>
                        <h1>..</h1>
                    </header>

                    <body>
                        <section className="secaoContrate">

                            <img src={relogio} alt={"Ícone Relógio"} />
                            <div className="textos_secao1">
                                <h1 id="texto_grande">CONTRATE  AGORA  MESMO !</h1>
                                <h4 id="texto_menor">Serviços gerais rápidos e de qualidade</h4>
                            </div>
                            <img src={seloQualidade} alt={"Ícone selo de qualidade"} />

                        </section>



                        <section className="secaoImagens">
                            <div id="container-img">
                                <img id="imgServico" src={img_faxina} alt={"imagem de icone faxina"} />
                                <button id="button-img" >Faxina</button>
                            </div>

                            <div id="container-img">
                                <img id="imgServico" src={img_reforma} alt={"imagem de icone reforma"} />
                                <button id="button-img" >Reforma e Construção</button>
                            </div>

                            <div id="container-img">
                                <img id="imgServico" src={img_encanador} alt={"imagem de icone encanador"} />
                                <button id="button-img" >Encanador</button>
                            </div>

                            <div id="container-img">
                                <img id="imgServico" src={img_jardinagem} alt={"imagem de icone jardinagem"} />
                                <button id="button-img" >Jardinagem</button>
                            </div>

                        </section>
                    </body>


                </div>
            </HomeStyles>
        </div>

    );
}

export default Home;