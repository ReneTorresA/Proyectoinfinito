import React from "react";
import logoinf from "./img/logoinf.svg"
import '../App.css'
import logo2 from './img/puedeserpa.svg'
import {NavLink} from 'react-router-dom'

function Header() {


    return <section>  
    <nav id="main-nav" className="navbar py-4 fixed-top navbar-expand-lg navbar-light headers">
        <div className='container'>
            <NavLink className="navbar-brand d-flex" to="/">
            
                <img src={logo2} lt="Logo infinito" width="49" height="24" className="d-inline-block align-text-top" />
                ㅤProyecto Infinito
            </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
            <NavLink className="nav-link" to="/">Inicio <span className="sr-only"></span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/Cursos">Cursos</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/Contacto">Contacto</NavLink>
            </li>
           
        </ul>
    </div>
        </div>
  </nav>
  </section>
    
       
    
   
}

export default Header;