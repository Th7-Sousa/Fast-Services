import Styled from "styled-components";

export const HomeStyles = Styled.div`

.quadroPrincipal {
    max-width: 100%;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
header{
    background-color: #266073;
}
body {
    display: flex;
    flex-direction: column;
}

.secaoContrate {  
    background-color: #001542;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0.5rem 0;
}

.textos_secao1 {
    max-width: max-content;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#texto_grande {
    color: #FFB30D;
    font-size: 2rem;
    letter-spacing: 0.150rem;
    word-spacing: 0.4rem;
    font-weight: 500;
}
#texto_menor {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 400;
}

.secaoImagens {
    max-height: max-content;
    background-color: #266073;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    align-items: center;
    padding: 3.2rem 0;
}

#container-img {
    max-width: max-content;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
#imgServico {
    width: 14rem;
    height: 14rem;
    background-color: #FFB30D;
    border: 0.1rem solid #001542;
    opacity: 85%;
    cursor: pointer;
    border-radius: 0.5rem;
}
#button-img{
    color:  #ffffff;
    background-color: #001542;
    width: 14rem;
    text-align: center;
    border-radius: 1rem;
    padding: 0.3rem 0;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}
#button-img:hover {
    color: #001542; 
    background-color: #ffffff;
    -webkit-transform: scale(1.1);
    transform: scale(1.04);
}
`;