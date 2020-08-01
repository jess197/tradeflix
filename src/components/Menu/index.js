import React from 'react'; 
import logo from '../../assets/img/logo.png';
import './Menu.css';
//import Button from '../Button'
import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
              <img className="Logo" src={logo} alt="TradeFlix"></img>  
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
            
        </nav>
    );
    
}

export default Menu; 