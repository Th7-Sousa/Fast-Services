import React from 'react';
import { Style } from './styles';
import logo from "../../../src/logo.svg";

const Navbar = () => {
    return (
        <Style>
            <div className="main">
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
                <a href="./Servicos" className="nav-link">
                    Serviços
                </a>
                <a href="./Contato" className="nav-link">
                    Contato
                </a>
                <a href="./Login" className="nav-link-login">
                    Login
                </a>
                </nav>
            </div>
          </Style>
    );
}

export default Navbar;