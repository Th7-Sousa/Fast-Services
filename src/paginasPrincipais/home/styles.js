import Styled from "styled-components";

export const HomeStyles = Styled.div`

box-sizing:border-box;

.quadroPrincipal {
    max-width: 100%;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #FFFFFF;
}

body {
    display: flex;
    flex-direction: column;
}
.secao-contrate {  
    background-color: #001542;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0.650rem 0;
}
.textos-secao1 {
    max-width: max-content;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
#texto-grande {
    color: #FFB30D;
    font-size: 2rem;
    letter-spacing: 0.150rem;
    word-spacing: 0.4rem;
    font-weight: 500;
}
#texto-menor {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 400;
}
`;