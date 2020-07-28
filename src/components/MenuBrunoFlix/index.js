import React from "react";
import Logo from '../../assets/img/brunoflix.png';
import "./MenuBrunoFlix.css";
import Button from "../Button";

function MenuBrunoFlix() {
    return (
        <nav className="MenuBrunoFlix">
            <a href="/">
                <img className="Logo" src={Logo} alt="BrunoFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default MenuBrunoFlix;