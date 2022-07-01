import React from "react";
import {HomeStyles}  from "./styles";
import relogio from "./icones/relogio.svg";
import seloQualidade from "./icones/seloQualidade.svg";
import container_temporario from "./icones/container_temporario.svg";

const Home = () => {
    return (

        <div>
            <HomeStyles>
                <div className="quadroPrincipal">
                    <header>
                        <h1>logo________________________menu</h1>
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
                            <img id="img" src={container_temporario} alt={"Imagem faxina"} />
                            <img id="img" src={container_temporario} alt={"Imagem faxina"} />
                            <img id="img" src={container_temporario} alt={"Imagem faxina"} />
                            <img id="img" src={container_temporario} alt={"Imagem faxina"} />
                            
                        </section>
                    </body>


                </div>
            </HomeStyles>
        </div>

    );
}

export default Home;