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

header {
    width: 100%;
    max-height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 13rem;
    padding-bottom: 0.5rem;
}

.section-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1.5rem;
    gap: 0.2rem;
}

.menu {
    max-width: max-content;
    max-height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;
}

.nav-link, .nav-link-login {
    color: #172026;
    text-decoration: none;
    font-weight: bold;
}

.nav-link-login {
    background-color: #FFB30D;
    padding 0.2rem 0.4rem;
    border-radius: 0.5rem;
    text-align: center;
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

.secao-imagens {
    max-height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    align-items: center;
    padding: 2.1rem 0;
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
    width: 12rem;
    height: 12rem;
    background-color: #5FCDD9;
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