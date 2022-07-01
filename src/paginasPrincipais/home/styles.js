import Styled from "styled-components";

export const HomeStyles = Styled.div`

.quadroPrincipal {
    max-width: 100%;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.secaoContrate {  
    background-color: #001542;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1.5rem 0;
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
    background: trasparent;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 4rem;
    align-items: center;
    padding: 0.5rem 0;
}
#img {
    height: 25rem;
}
`;