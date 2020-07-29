import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';



function Menu() {

    return (
        <nav className="Menu">
            <a to="/">
                <img className="Logo" src={Logo} alt="AluraFlixLogo" />
            </a>
            //botão se comportando como um a 
            <Button as={Link} className="ButtonLink" to="/cadastro/video">  Novo vídeo </Button>
        </nav>

    );
}

export default Menu;