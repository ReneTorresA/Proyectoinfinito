import React from "react";
import '../App.css'
import {NavLink} from 'react-router-dom'
function Main() {

    return <div className="App"> 
    <div className="d-flex justify-content-center align-items-center  h-100">
    
    <div className="container "> 
    
        

            <div className="row my-4">
                
                <div className="col-md-4 mb-4">

                <div className="card w-100">
                <img src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="card-img-top" alt="Imágen de un pizarrón con matemáticas"/>
                <div className="card-body text-center">
                    <h5 className="card-title">Cálculo III / Avanzado / Vectorial para Ingeniería</h5>
                    <p className="card-text">Curso de Cálculo III para Ingeniería, con un enfoque práctico de resolución de ejercicios de tipo prueba, abarcamos de lo más basico a lo más complejo</p>
                    <NavLink to="/proyectoinfinito/calculo3" className="btn btn-warning"> Ir al curso</NavLink>
                </div>
                </div>
                </div>

                <div className="col-md-4 mb-4">

                <div className="card">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="card-img-top" alt="Imágen de un código de programación"/>
                <div className="card-body text-center">
                    <h5 className="card-title">Curso de introducción a la programación (Python)</h5>
                    <p className="card-text">Curso de introducción a la programación con Python, orientado a las personas que quieran iniciarse en el mundo de la programación.</p>
                    <NavLink to="/proyectoinfinito/python" className="btn btn-warning">Ir al curso</NavLink></div>
                </div>
                </div>

                <div className="col-md-4 mb-4">

                <div className="card">
                <img src="https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="card-img-top" alt="Péndulo de Newton"/>
                <div className="card-body text-center">
                    <h5 className="card-title pb-auto">Física para la PDU/PAES</h5>
                    <p className="card-text">Prepara tu PAES de física con este curso, dividido en modulo de plan común y electivo. Con este curso te aseguras de obtener un buen puntaje y poder entrar a esa carrera que tanto sueñas</p>
                    <NavLink to="/proyectoinfinito/fisica" className="btn btn-warning">Ir al Curso</NavLink>
                </div>
                </div>
                </div>


                







                
                </div>

                





            </div>

     

</div>
</div>

}

export default Main;