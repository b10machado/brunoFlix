import React from 'react';
import Logo from '../../assets/img/crackneto.png';
import './MenuBrunoFlix.css';
import Button from '../Button';
import { Link } from 'react-router-dom'
function MenuBrunoFlix() {
    return (
        <nav className="MenuBrunoFlix">
            <Link to="/">
                <img className="Logo" src={Logo} alt="BrunoFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default MenuBrunoFlix;