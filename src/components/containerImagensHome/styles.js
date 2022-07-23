import Styled from 'styled-components';

export const Style = Styled.div `

.secao-imagens {
    max-height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    align-items: center;
    padding: 1.8rem 0;
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
    transition: all 0.7s;
    cursor: pointer;
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